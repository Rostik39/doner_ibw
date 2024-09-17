import json
from flask import request, jsonify, Blueprint
from model import User, db
from flask_jwt_extended import create_access_token, unset_jwt_cookies

auth = Blueprint('auth', __name__)

@auth.route('/signIn', methods=["POST"])
def signIn():
    if not request.json or not 'username' in request.json or not 'password' in request.json:
        return jsonify({"message": "Invalid request"}), 400
        
    username = request.json["username"]
    password = request.json["password"]

    user = User.query.filter_by(username=username).first()

    if user is None or not user.verify_password(password):
        return jsonify({"message": "Invalid username or password"}), 401
    access_token = create_access_token(identity=username)

    return jsonify({"message": "Login successful", "token": access_token}), 200


@auth.route('/signUp', methods=["POST"])
def signUp():
    if not request.json or not 'username' in request.json or not 'password' in request.json:
        return jsonify({"message": "Invalid request"}), 400
    
    username = request.json["username"]
    password = request.json["password"]

    if User.query.filter_by(username=username).first():
        return jsonify({"message": "Username already taken"}), 400
    
    new_user = User(username=username, password=password, balance=0)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully", "user": {"username": username}}), 201


@auth.route('/logout', methods=["POST"])
def logout():
    response = jsonify({"massage": "logout successful"})
    unset_jwt_cookies(response)

    return response