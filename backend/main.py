from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime
import os
from dotenv import load_dotenv

load_dotenv()

# Access the SECRET_KEY
SECRET_KEY = os.getenv('SECRET_KEY')

app = Flask(__name__)
cors = CORS(app, origins="*")

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:aryan158@localhost:5433/flask_database'
app.config['SECRET_KEY'] = SECRET_KEY
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
     blood_pressure = db.Column(db.Float, nullable=False)
     pyurea = db.Column(db.Float, nullable=False)
    
    
    
with app.app_context():
    db.create_all()
    
def generate_token(user_id):
    payload = {
        'user_id': user_id,
        'exp': datetime.datetime.now() + datetime.timedelta(hours=2),  # Token expiry
        'iat': datetime.datetime.now()
    }
    token = jwt.encode(payload, 'your_secret_key', algorithm='HS256')
    return token

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
    # Check if user exists and password is correct
    if user and check_password_hash(user.password, data['password']):
        
        # Generate JWT token
        token = jwt.encode({
            'user_id': user.id,  # or any user data you want to include
            'exp': datetime.datetime.now() + datetime.timedelta(hours=1)  # Token expiration
        }, SECRET_KEY, algorithm='HS256')
        # Send the token back to the client
        return jsonify({'message': 'Login successful!', 'token': token})
    
    # If login fails
    return jsonify({'message': 'Invalid email or password!'}), 401
    
if __name__ == "__main__":
    app.run(debug=True, port=8000)