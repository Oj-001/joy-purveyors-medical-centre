from flask import Blueprint, request, jsonify

contact_bp = Blueprint('contact', __name__)

@contact_bp.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    return jsonify({'message': 'Message received'})