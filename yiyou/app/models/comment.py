from app.extensions import db
from datetime import datetime

class SpotComment(db.Model):
    __tablename__='spot_comments'
    id = db.Column(db.Integer,primary_key=True)
    content = db.Column(db.Text,nullable=False)
    create_time = db.Column(db.DateTime,default=datetime.utcnow)
    spot = db.Column(db.Integer,db.ForeignKey('spots.id'))
    user = db.Column(db.Integer,db.ForeignKey('users.id'))

class FoodsComment(db.Model):
    __tablename__='food_comments'
    id = db.Column(db.Integer,primary_key=True)
    content = db.Column(db.Text,nullable=False)
    create_time = db.Column(db.DateTime,default=datetime.utcnow)
    food = db.Column(db.Integer,db.ForeignKey('foods.id'))
    user = db.Column(db.Integer,db.ForeignKey('users.id'))

class ShopsComment(db.Model):
    __tablename__='shop_comments'
    id = db.Column(db.Integer,primary_key=True)
    content = db.Column(db.Text,nullable=False)
    create_time = db.Column(db.DateTime,default=datetime.utcnow)
    shop = db.Column(db.Integer,db.ForeignKey('shops.id'))
    user = db.Column(db.Integer,db.ForeignKey('users.id'))

class HotelsComment(db.Model):
    __tablename__='hotel_comments'
    id = db.Column(db.Integer,primary_key=True)
    content = db.Column(db.Text,nullable=False)
    create_time = db.Column(db.DateTime,default=datetime.utcnow)
    hotel = db.Column(db.Integer,db.ForeignKey('hotels.id'))
    user = db.Column(db.Integer,db.ForeignKey('users.id'))