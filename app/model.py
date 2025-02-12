from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, timezone

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    balance = db.Column(db.Numeric(10, 2), nullable=False)
    admin = db.Column(db.Boolean, nullable=False, default=False)

    def __repr__(self):
        return f'<User {self.username}>'

    @property
    def password(self):
        raise AttributeError('password is not a readable attribute')

    @password.setter
    def password(self, password):
        self.password_hash = generate_password_hash(password)

    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)
    
    def verify_rights(self):
        if self.admin :
            return True
        else :
            return False

class Category(db.Model):
    __tablename__ = 'categories'
    category_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50), nullable=False)

class Dish(db.Model):
    __tablename__ = 'dishes'
    dish_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    number = db.Column(db.String(10))
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500))
    category_id = db.Column(db.Integer, db.ForeignKey('categories.category_id'))
    price = db.Column(db.Numeric(10, 2))

class PizzaSize(db.Model):
    __tablename__ = 'pizza_sizes'
    size_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)

class PizzaSubcategory(db.Model):
    __tablename__ = 'pizza_subcategories'
    subcategory_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    number = db.Column(db.Integer, nullable=False) 

class PizzaPrice(db.Model):
    __tablename__ = 'pizza_prices'
    number = db.Column(db.String(10), db.ForeignKey('dishes.number'), primary_key=True)
    size_id = db.Column(db.Integer, db.ForeignKey('pizza_sizes.size_id'), primary_key=True)
    subcategory_id = db.Column(db.Integer, db.ForeignKey('pizza_subcategories.subcategory_id'), primary_key=True)
    price = db.Column(db.Numeric(10, 2))

class Order(db.Model):
    __tablename__ = 'order'

    order_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    created = db.Column(db.DateTime, nullable=False, default=datetime.now(timezone.utc))

class OrderItem(db.Model):
    __tablename__ = 'orderitem'

    item_id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey('order.order_id'), nullable=False)
    dish_id = db.Column(db.Integer, db.ForeignKey('dishes.dish_id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    size_id = db.Column(db.Integer, db.ForeignKey('pizza_sizes.size_id'), nullable=True)
    sauce_id = db.Column(db.Integer, db.ForeignKey('sauce.id'), nullable=True)

class Sauce(db.Model):
    __tablename__ = 'sauce'

    id = db.Column(db.Integer, primary_key=True)
    herbs = db.Column(db.Boolean, nullable=False, default=False)
    garlic = db.Column(db.Boolean, nullable=False, default=False)
    spicy = db.Column(db.Boolean, nullable=False, default=False)

class Tip(db.Model):
    __tablename__ = 'tip'

    id = db.Column(db.Integer, primary_key=True)
    with_tip = db.Column(db.Boolean, nullable=False)