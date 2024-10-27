from flask_sqlalchemy import SQLAlchemy
import json


db = SQLAlchemy()


    


def verify_data(schema,data):
    # data = json.loads(data)
    for i in schema.keys():
        if schema[i].lower() == "required":
            if not data.get(i):
                return False
    return True

