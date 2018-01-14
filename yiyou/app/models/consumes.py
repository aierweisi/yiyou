from app.extensions import db

class Spots(db.Model):
    __tablename__='spots'
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(50),nullable=False)
    city = db.Column(db.Integer,db.ForeignKey('city.id'))
    describe = db.Column(db.Text,nullable=True)
    adress = db.Column(db.String(100),nullable=False)
    score = db.Column(db.Integer,nullable=False,default=5)
    pictures = db.Column(db.Text,nullable=False)
    price =db.Column(db.Integer,nullable=False)
    type = db.Column(db.String(20),nullable=True)
    rank = db.Column(db.Integer,nullable=True,default=5)
    # comment = db.relationship('spot_comments',backref='spot',lazy='lazy')


class Foods(db.Model):
    __tablename__='foods'
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(50),nullable=False)
    city = db.Column(db.Integer, db.ForeignKey('city.id'))
    describe = db.Column(db.Text,nullable=True)
    adress = db.Column(db.String(100),nullable=False)
    score = db.Column(db.Integer,nullable=False,default=5)
    pictures = db.Column(db.Text,nullable=False)
    price =db.Column(db.Integer,nullable=False)
    type = db.Column(db.String(20),nullable=True)
    comment = db.relationship('food_comments',backref='food',lazy='lazy')

class Shops(db.Model):
    __tablename__='shops'
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(50),nullable=False)
    city = db.Column(db.Integer, db.ForeignKey('city.id'))
    describe = db.Column(db.Text,nullable=True)
    adress = db.Column(db.String(100),nullable=False)
    score = db.Column(db.Integer,nullable=False,default=5)
    pictures = db.Column(db.Text,nullable=False)
    price =db.Column(db.Integer,nullable=False)
    type = db.Column(db.String(20),nullable=True)
    comment = db.relationship('shop_comments',backref='shop',lazy='lazy')


class Hotels(db.Model):
    __tablename__='hotels'
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(50),nullable=False)
    city = db.Column(db.Integer, db.ForeignKey('city.id'))
    describe = db.Column(db.Text,nullable=True)
    adress = db.Column(db.String(100),nullable=False)
    score = db.Column(db.Integer,nullable=False,default=5)
    pictures = db.Column(db.Integer,nullable=False)
    price =db.Column(db.Integer,nullable=False)
    type = db.Column(db.String(20),nullable=True)
    rank = db.Column(db.Integer,nullable=True,default=5)
    comment = db.relationship('hotels_comment',backref='hotel',lazy='lazy')
