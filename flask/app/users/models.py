from app.extensions import db
from datetime import datetime, timezone
# user_id = Column(Integer, ForeignKey("users.id"), index=True)
class Users(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer(),primary_key=True)
    name = db.Column(db.String(150))
    role = db.Column(db.String(9))
    email = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime, onupdate=lambda: datetime.now(timezone.utc))
    
    def __repr__(self):
        return f'<User "{self.id}">'
    
class Class(db.Model):
    __tablename__ = "class"
    id = db.Column(db.Integer(),primary_key=True)
    name = db.Column(db.String(150))
    grader = db.Column(db.Integer(), db.ForeignKey('users.id'))
    admin =  db.Column(db.Integer(), db.ForeignKey("users.id"))
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime, onupdate=lambda: datetime.now(timezone.utc))
    

    def __repr__(self):
        return f'<Class "{self.id}">'
    
class Assignment(db.Model):
    __tablename__ = "assignment"
    id = db.Column(db.Integer(),primary_key=True)
    class_id = db.Column(db.Integer(), db.ForeignKey("class.id"), index=True)
    rubric = db.Column(db.Text())
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime, onupdate=lambda: datetime.now(timezone.utc))

    def __repr__(self):
        return f'<Assignment "{self.id}">'
    
class Submission(db.Model):
    __tablename__ = "submission"
    id = db.Column(db.Integer(),primary_key=True)
    assignment =  db.Column(db.Integer(), db.ForeignKey("assignment.id"), index=True)
    student_id = db.Column(db.Integer())
    file_url = db.Column(db.String())
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime, onupdate=lambda: datetime.now(timezone.utc))
    

    def __repr__(self):
        return f'<Submission "{self.id}">'