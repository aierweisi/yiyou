from app.extensions import db
from datetime import datetime

class Experience(db.Model):
    __tablename__='experience'
    id = db.Column(db.Integer,primary_key=True)
    auth = db.Column(db.Integer,db.ForeignKey('users.id'))
    title = db.Column(db.String(30),nullable=True)
    content = db.Column(db.Text,nullable=False)
    pictures = db.Column(db.Text,nullable=True)
    create_time = db.Column(db.DateTime,default=datetime.utcnow)
    city = db.Column(db.Integer,db.ForeignKey('city.id'))
    type = db.Column(db.String(64),nullable=False)
    score = db.Column(db.Integer,default=5)


class Questions(db.Model):
    __tablename__='questions'
    id = db.Column(db.Integer,primary_key=True)
    qid = db.Column(db.Integer,default=0)
    auth = db.Column(db.Integer, db.ForeignKey('users.id'))
    title = db.Column(db.String(30), nullable=True)
    content = db.Column(db.Text, nullable=False)
    pictures = db.Column(db.Text, nullable=True)
    create_time = db.Column(db.DateTime, default=datetime.utcnow)
    city = db.Column(db.Integer, db.ForeignKey('city.id'))
    type = db.Column(db.String(64), nullable=False)