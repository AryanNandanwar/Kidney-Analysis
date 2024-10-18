from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from bson import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash



app = Flask(__name__)
cors = CORS(app, origins="*")

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:aryan158@localhost:5433/flask_database'

db = SQLAlchemy(app)



class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)
    contact_number = db.Column(db.String(15), nullable=True)
    
class TestReport(db.Model):
     id = db.Column(db.Integer, primary_key=True, autoincrement=True)
     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
     serum_creatinine = db.Column(db.Float, nullable=False)
     gfr = db.Column(db.Float, nullable=False)
     bun = db.Column(db.Float, nullable=False)
     serum_calcium = db.Column(db.Float, nullable=False)
     ana = db.Column(db.Float, nullable=False)
     c3_c4 = db.Column(db.Float, nullable=False)
     protein_in_urea = db.Column(db.Float, nullable=False)
     hermaturia = db.Column(db.Float, nullable=False)
     oxalate_levels = db.Column(db.Float, nullable=False)
     urine_ph = db.Column(db.Float, nullable=False)
    
    
    
with app.app_context():
    db.create_all()

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    hashed_password = generate_password_hash(data['password'])
    new_user = User(
        name=data['name'],
        email=data['email'],
        password=hashed_password,
        contact_number=data.get('contact_number')
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created successfully!'})

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if user and check_password_hash(user.password, data['password']):
        return jsonify({'message': 'Login successful!'})
    return jsonify({'message': 'Invalid email or password!'}), 401
    
if __name__ == "__main__":
    app.run(debug=True, port=8000)