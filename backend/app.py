from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from config import Config
from model import db
from populate import populateDB
from flask_jwt_extended import JWTManager

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    jwt = JWTManager(app)
    db.init_app(app)
    migrate = Migrate(app, db)
    CORS(app, expose_headers=["New-Access-Token"])

    with app.app_context():
        db.create_all()

    # TODO : create console command to put all info into db
        # data = populateDB()

        # for data_table in data :
        #     db.session.add_all(data_table)
        #     db.session.commit()

    from routes.main import main
    app.register_blueprint(main)

    from routes.auth import auth
    app.register_blueprint(auth)
    
    from routes.cart import cart
    app.register_blueprint(cart)

    return app, jwt

if __name__ == '__main__':
    app, jwt = create_app()
    app.run()
