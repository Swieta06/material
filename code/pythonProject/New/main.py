import logging

from flask_jwt import JWT
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
from sqlalchemy import select
from flask import Flask, request, jsonify
from sqlalchemy.exc import NoResultFound

# from flask_jwt import JWT, jwt_required, current_identity
from models.user import User
from models import statement, update_statement

app = Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] = 'super-secret-service'
jwt_manager = JWTManager(app)

logging.basicConfig(
    filename="web.log", format="%(name)s - %(levelname)s - %(message)s",
    level=logging.DEBUG
)


@app.route("/")
def homepage():
    return "hello world"


@app.route("/login/", methods=["POST"])
def auhentication():
    email, password = (request.json.get("email", None), request.json.get("password", None))
    user = select(User).where(User.email == email).where(User.password == password)
    try:
        stat = statement(user).one()
        access_token = create_access_token(identity=stat.id)
    except AttributeError:
        logging.error(f"{email} Attemp to logged in failed")
        return jsonify(message="Credential Error"), 404
    except NoResultFound:
        logging.error(f"{email} Attemp to logged in failed")
        return jsonify(message="Credential Error"), 404
    else:
        logging.error(f"{email} Attemp to logged in success")
        # print(stat.one())
        return jsonify(
            name=stat.name,
            email=stat.email,
            token=access_token
        )


@app.route("/profile", methods=["GET"])
@jwt_required()
def profile():
    current_user = get_jwt_identity()
    user = select(User).where(User.id == current_user)
    stat = statement(user).one()
    return jsonify(
        id=stat.id,
        name=stat.name,
        email=stat.email

    ), 200


@app.route("/profile-update", methods=["PUT"])
@jwt_required()
def profile_update():
    email, name = (request.json.get("email", None), request.json.get("name", None))
    current_user = get_jwt_identity()
    user = select(User).where(User.id == current_user)
    update_statement(user, name=name, email=email)
    return jsonify(
        message=f"Update to {name}"
    ), 200


def identity(payload):
    user_id = payload["identity"]
    return select(User).where(User.id == user_id).one()


jwt = JWT(app, auhentication, identity)

if __name__ == '__main__':
    app.run()
