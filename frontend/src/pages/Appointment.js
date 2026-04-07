import '../styles/appointment.css';
import doctorImg from '../purveyors_images/about.jpg'; // your doctor image

function Appointment() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const message = form.message.value;
    const department = form.department.value;

    await fetch('http://localhost:5000/api/appointment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, message, department })
    });

    alert("Appointment booked!");
    form.reset();
  };

  return (
    <div className="appointment-page">

      {/* IMAGE */}
      <div className="appointment-image">
        <img src={doctorImg} alt="Doctor" />
      </div>

      {/* APPOINTMENT CARD */}
      <div className="appointment-card">
        <h1>Book Appointment</h1>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Phone</label>
          <input type="text" name="phone" placeholder="Enter your phone" required />

          <label>Department / Service</label>
          <select name="department" required>
            <option value="">Select a service</option>
            <option value="General Consultation">General Consultation</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Dental Care">Dental Care</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Orthodontics">Orthodontics</option>
          </select>

          <label>Message</label>
          <textarea name="message" placeholder="Your message" required></textarea>

          <button type="submit">Book</button>
        </form>
      </div>

    </div>
  );
}

export default Appointment;