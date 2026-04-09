import '../styles/contact.css';
import axios from 'axios';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      alert("Message sent!");
    } catch (err) {
      alert("Error sending message");
    }
  };

  return (
    <>
      <div className="contact-container">

        {/* LEFT SIDE - FORM */}
        <div className="contact-form">
          <h2>Send Message</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="website"
              placeholder="Website"
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Write Message"
              rows="5"
              onChange={handleChange}
              required
            />

            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>

        {/* RIGHT SIDE - INFO */}
        <div className="contact-info">

          <div className="info-card">
            <h3>Office Address</h3>
            <p>Chuka, Ndagani</p>
            <p>Tharaka Nithi</p>
            <p>Kenya</p>
          </div>

          <div className="info-card">
            <h3>Phone Number</h3>
            <p>+254 733 519 526</p>
          </div>

          <div className="info-card">
            <h3>Email Address</h3>
            <p>info@jpmtchospital.org</p>
            <p>https://jpmtchospital.org/</p>
          </div>

          <div className="info-card">
            <h3>Fax Number</h3>
            <p>+254 733 519 526</p>
          </div>

          <div className="call-now">
            Call Now: <span>+254 733 519 526</span>
          </div>

        </div>
      </div>

      {/* GOOGLE MAP SECTION */}
      <div className="map-section">
        <iframe
          title="hospital-location"
          src="https://www.google.com/maps?q=Ndagani%20Kenya&output=embed"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;