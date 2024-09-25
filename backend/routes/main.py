from model import Dish, PizzaPrice, PizzaSize, Category
from flask import Blueprint, jsonify
from datetime import timezone, datetime, timedelta
from flask_jwt_extended import jwt_required, get_jwt, create_access_token, get_jwt_identity

main = Blueprint('main', __name__)

@main.after_request
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

@main.route('/api/menu/<string:category_name>', methods=['GET'])
@jwt_required()
def get_menu_by_category(category_name):
    category = Category.query.filter_by(name=category_name).first()
    if category is None:
        return jsonify({'error': 'Category not found'}), 404

    dishes = Dish.query.filter_by(category_id=category.category_id).all()
    result = []

    if category_name.lower() == 'pizza':
        for dish in dishes:
            pizza_prices = PizzaPrice.query.filter_by(number=dish.number).all()
            prices_by_size = []
            for pizza_price in pizza_prices:
                size = PizzaSize.query.filter_by(size_id=pizza_price.size_id).first()
                if size:
                    prices_by_size.append({
                        size.name: float(pizza_price.price)
                    })
            result.append({
                'subcategory_id': pizza_price.subcategory_id,
                'dish_id': dish.dish_id,
                'number': dish.number,
                'name': dish.name,
                'description': dish.description,
                'price': prices_by_size
            })
    else:
        for dish in dishes:
            result.append({
                'dish_id': dish.dish_id,
                'number': dish.number,
                'name': dish.name,
                'description': dish.description,
                'price': float(dish.price)
            })

    return jsonify(result), 201

@main.route('/api/menu/categories', methods=["GET"])
@jwt_required()
def get_all_categories():
    result = []
    categories = Category.query.all()
    for category in categories:
        result.append({
            'id': category.category_id,
            'name': category.name
        })

    return jsonify(result), 201

