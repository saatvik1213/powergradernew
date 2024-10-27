
from app.users import bp
from .models import Users, Class, Assignment, Submission
from flask import request, Response, jsonify
from app.extensions import db, verify_data
import json


@bp.get('/grader')
def users():
    try:
        data = False
        users = Users.query.filter_by(id=request.args["id"]).first()
        if users:
            if users.role  == "grader":
                data = True

        response = {request.args["id"]:data}
        return Response(json.dumps(response) , 200, mimetype="application/json")
    except:
        return Response({'error_code':"500"}, 500, mimetype="application/json")

@bp.post('/set_admin')
def create_admin():
    
    data = request.get_json()
    
    schema = {
        "name": "required",   
        "email":"required",
    }
    data["role"] = "admin"

    if verify_data(schema,data):
        new_row = Users(**data)
        db.session.add(new_row)
        db.session.commit()
        response = {"User":new_row.id }
        return Response(json.dumps(response) , 200, mimetype="application/json")
    else:
        response = {"Error_code":"Data invalid"}
        return Response(json.dumps(response) , 500, mimetype="application/json")

@bp.get('/get_user_id')
def get_user():
    
    try:
        users = Users.query.filter_by(email=request.args["email"]).first()
        if users:
            response = {"user":users.id}
            return Response(json.dumps(response) , 200, mimetype="application/json")
        else:
            Response(jsonify({"error": "User not found"}), 404,mimetype="application/json")
    except:
        return Response({'error_code':"500"}, 500, mimetype="application/json")


@bp.post('/set_grader')
def set_grader():
    data = request.get_json()
    schema = {
        "name": "required",   
        "email":"required",
        "class_id":"required"
    }
    data["role"] = "grader"
    
    if verify_data(schema,data):
        class_id = data['class_id']
        del data['class_id']
        new_row = Users(**data)
        db.session.add(new_row)
    else:
        response = {"Error_code":"Data invalid"}
        return Response(json.dumps(response) , 500, mimetype="application/json")

    
    _class = Class.query.filter_by(id = class_id).first()
    if not users:
        response = {"Error_code":"Class Not Found"}
    if _class:
        _class.grader = new_row.id
        db.session.commit()
        response = {str(new_row.id):True}
        return Response(json.dumps(response) , 200, mimetype="application/json")
    else:
        response = {"Error_code":"Class Not Found"}
        return Response(json.dumps(response) , 200, mimetype="application/json")


@bp.post('/class')
def create_class():
    data = request.get_json()
    schema = {
        "name":"required",
        "admin":"required",
    }
    
    if verify_data(schema,data):
        new_row = Class(**data)
        db.session.add(new_row)
        db.session.commit()
        return jsonify(new_row.to_dict()), 201
    else:
        response = {"Error_code":"Data invalid"}
        return Response(json.dumps(response) , 500, mimetype="application/json")

@bp.get('/class')
def get_class():  #send grader id "?grader=id" 
    
    query_params = request.args.to_dict()

    
    filters = {key: value for key, value in query_params.items() if hasattr(Class, key)}

    if not filters:
        return Response(jsonify({"error": "No valid query parameters provided"}), 400,mimetype="application/json")


    query = Class.query.filter_by(**filters)
    result = query.first()
    if result:
        return jsonify(result.to_dict()), 200
    else:
        return jsonify({"error": "Class not found"}), 404


@bp.post('/assignment')
def create_assignment():
    data = request.get_json()
    schema = {
        "rubric":"required",
        "class_id":"required"
    }

    if verify_data(schema,data):
        new_row = Assignment(**data)
        db.session.add(new_row)
        db.session.commit()
        return jsonify(new_row.to_dict()), 200
    else:
        response = {"Error_code":"Data invalid"}
        return jsonify(response), 200
    


#create api frecieving class id and sending all the assignments linked to it

@bp.get('/assignment') #send class_id and get all assignments
def get_assignment():
    
    query_params = request.args.to_dict()

    
    filters = {key: value for key, value in query_params.items() if hasattr(Assignment, key)}

    if not filters:
        return jsonify({"error": "No valid query parameters provided"}), 400


    query = Assignment.query.filter_by(**filters)
    
    resulted_arr = []
    for assignment in query:
        resulted_arr.append(assignment.to_dict())
    
    if resulted_arr:
        dict1 = {"assignemnts":resulted_arr}
        return jsonify(dict1), 200
    else:
        return jsonify({"error": "User not found"}), 404


@bp.post('/submission')
def create_submission():
    data = request.get_json()
    schema = {
        "student_id": "required",
        "file_url":"required",
        "assignment":"required"
    }
    
    if verify_data(schema,data):
        new_row = Submission(**data)
        db.session.add(new_row)
        db.session.commit()
        return jsonify(new_row.to_dict()), 200
    else:
        response = {"Error_code":"Data invalid"}
        return Response(json.dumps(response) , 500, mimetype="application/json")
    
@bp.get('/submission')
def get_submission():
    
    query_params = request.args.to_dict()

    
    filters = {key: value for key, value in query_params.items() if hasattr(Submission, key)}

    if not filters:
        return jsonify({"error": "No valid query parameters provided"}), 400


    query = Submission.query.filter_by(**filters)
    result = query.first()  

    if result:
        return jsonify(result.to_dict()), 200
    else:
        return jsonify({"error": "User not found"}), 404
# @bp.post('/set_grader')
# def categories():
#     users = Users.query.filter(Users.id == request.args["userId"])
#     _class = Class.query.filter(Class.id == request.args["classId"])
#     if not users:
#         response = {"Error_code":"Class Not Found"}
#     if _class:
#         _class = _class[0]
#         _class.grader()
#         db.session.commit()
#         response = {request.args["userId"]:True}
#         return Response(json.dumps(response) , 200, mimetype="application/json")
#     else:
#         response = {"Error_code":"Class Not Found"}
#         return Response(json.dumps(response) , 200, mimetype="application/json")
    



    