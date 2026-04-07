from flask import Blueprint, request, jsonify
from models import db, Appointment

appointment_bp = Blueprint('appointment', __name__)

@appointment_bp.route('/api/appointment', methods=['POST'])
def create_appointment():
    data = request.json

    appt = Appointment(
        name=data['name'],
        phone=data['phone'],
        message=data['message']
    )

    db.session.add(appt)
    db.session.commit()

    return jsonify({'message': 'Appointment booked successfully'})