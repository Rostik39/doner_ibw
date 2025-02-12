from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt, create_access_token, get_jwt_identity
from datetime import timezone, datetime, timedelta
from model import User, Order, OrderItem, Sauce, PizzaSize, Dish, db

cart = Blueprint('cart', __name__)

@cart.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=10))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            response.headers["New-Access-Token"] = access_token
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original response
        return response


@cart.route("/api/cart/order", methods=["POST"])
@jwt_required()
def make_an_order():
    identity = get_jwt_identity()

    user = User.query.filter_by(username=identity["username"]).first()
    if not user:
        return jsonify({"error": "User not found"}), 404

    data = request.json
    cart = data["cart"]

    if not cart:
        return jsonify({"error": "Cart is empty"}), 400

    existing_order = Order.query.filter_by(user_id=user.id).first()
    if existing_order:
        order_items = OrderItem.query.filter_by(order_id=existing_order.order_id).all()

        for item in order_items:
            if item.sauce_id:
                Sauce.query.filter_by(id=item.sauce_id).delete()

        OrderItem.query.filter_by(order_id=existing_order.order_id).delete()
        db.session.delete(existing_order)
        db.session.commit()

    new_order = Order(user_id=user.id, created=datetime.now())
    db.session.add(new_order)
    db.session.commit()

    for item in cart:
        dish_id = item.get('dish_id')
        quantity = item.get('quantity', 1)

        dish = Dish.query.get(dish_id)
        if not dish:
            continue  

        size_id = None
        if 'selected_size' in item:
            pizza_size = PizzaSize.query.filter_by(name=item['selected_size']).first()
            if pizza_size:
                size_id = pizza_size.size_id

        sauce_id = None
        if 'sauces' in item:
            sauces_data = item['sauces']
            new_sauce = Sauce(
                herbs=sauces_data.get('herbs'),
                garlic=sauces_data.get('garlic'),
                spicy=sauces_data.get('spicy')
            )
            db.session.add(new_sauce)
            db.session.commit()

            sauce_id = new_sauce.id

        new_order_item = OrderItem(
            order_id=new_order.order_id,
            dish_id=dish_id,
            quantity=quantity,
            size_id=size_id,
            sauce_id=sauce_id
        )
        db.session.add(new_order_item)

    total_price = data["totalPrice"] 
    user.balance = float(user.balance) - float(total_price)

    db.session.commit()

    return jsonify({"message": "Order created successfully", "order_id": new_order.order_id}), 201


@cart.route("/api/balance", methods=["GET"])
@jwt_required() 
def get_balance():
    identity = get_jwt_identity()
    
    user = User.query.filter_by(username=identity["username"]).first()
    
    if user:
        return jsonify({"balance": str(user.balance)}), 200
    else:
        return jsonify({"error": "User not found"}), 404