from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt, create_access_token, get_jwt_identity
from datetime import timezone, datetime, timedelta
from model import User, db

user = Blueprint('user', __name__)

@user.after_request
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
    

@user.route("/api/users/balance", methods=["GET"])
@jwt_required
def get_users_balance():
    users = User.query.all()
    balances = []

    for user in users :
        object = {
            user.username: user.balance
        }
        balances.append(object)

    return jsonify(balances), 200