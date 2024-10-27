from flask import Flask
from app.extensions import db
from config import Config
# from users import users_bp
from flask_cors import CORS

# app = Flask(__name__)


def create_app(config_class=Config):
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(config_class)
    
    # Initialize Flask extensions here
    db.init_app(app)
    # # Register blueprints here

    from app.users import bp as users_bp
    app.register_blueprint(users_bp)
    with app.app_context():
        db.create_all()
    # @app.route('/test/')
    # def test_page():
    #     return '<h1>Testing the Flask Application Factory Pattern</h1>'

    return app


# export FLASK_APP=app