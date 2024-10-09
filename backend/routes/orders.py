from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt, create_access_token, get_jwt_identity
from datetime import timezone, datetime, timedelta
from model import User, Order, OrderItem, Sauce, PizzaSize, Dish, PizzaPrice, Tip, db

orders = Blueprint('orders', __name__)

@orders.after_request
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


@orders.route('/api/orders', methods=["GET"])
@jwt_required()
def get_orders():
    orders = Order.query.join(User).join(OrderItem).join(Dish).all()

    orders_data = []
    for order in orders:
        user = User.query.filter_by(id = order.user_id).first()
        items = OrderItem.query.filter_by(order_id=order.order_id).all()

        # reformat a date of an order
        formatted_date = order.created.strftime("%B %d, %Y")

        order_info = {
            "user": {
                "username": user.username,
                "balance": user.balance
            },
            "date": formatted_date,
            "cart": [],
        }

        for item in items:
            dish = Dish.query.get(item.dish_id)
            sauces = Sauce.query.get(item.sauce_id)

            prices_by_size = []
            if dish.category_id == 3 :
                pizza_prices = PizzaPrice.query.filter_by(number=dish.number).all()
                for pizza_price in pizza_prices:
                    size = PizzaSize.query.filter_by(size_id=pizza_price.size_id).first()
                    if size:
                        prices_by_size.append({
                            size.name: float(pizza_price.price)
                        })

            price = dish.price
            if prices_by_size :
                price = prices_by_size

            selected_size = None
            if item.size_id :
                selected_size_object = PizzaSize.query.filter_by(size_id=item.size_id).first()
                selected_size = selected_size_object.name

            order_item = {
                "dish_id": dish.dish_id,
                "number": dish.number,
                "name": dish.name,
                "description": dish.description,
                "price": price,
                "quantity": item.quantity,
                "selected_size": selected_size,
                "sauces": {
                    "herbs": sauces.herbs,
                    "garlic": sauces.garlic,
                    "spicy": sauces.spicy
                } if item.sauce_id else None
            }
            order_info["cart"].append(order_item)

        orders_data.append(order_info)

    return jsonify(orders_data)


@orders.route("/api/balance", methods=["PUT"])
@jwt_required()
def update_balance():
    data = request.json

    # Check if 'username' and 'new_balance' are in the request body
    if not data or 'username' not in data or 'new_balance' not in data:
        return jsonify({"error": "Invalid data, 'username' and 'new_balance' are required."}), 400
    
    username = data['username']
    new_balance = data['new_balance']

    try:
        new_balance = float(new_balance)
    except ValueError:
        return jsonify({"error": "Invalid balance value, must be a number."}), 400
    
    user = User.query.filter_by(username=username).first()

    if not user:
        return jsonify({"error": "User not found"}), 404

    user.balance = new_balance
    db.session.commit()  # Commit the changes to the database

    return jsonify({"message": f"Balance for {username} updated successfully", "new_balance": new_balance}), 200


@orders.route("/api/tip", methods=["GET"])
@jwt_required()
def get_tip():
    tip = Tip.query.first()
    
    return jsonify(tip.with_tip), 200


@orders.route("/api/tip", methods=["POST"])
@jwt_required()
def update_tip():
    tip = Tip.query.first()
    data = request.json
    tip.with_tip = data["withTip"]
    db.session.add(tip)
    db.session.commit()

    return jsonify({"message": "Success"}), 200
