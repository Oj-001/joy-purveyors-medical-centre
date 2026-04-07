import "./footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-section">
          <h3>Joy Purveyors</h3>
          <p>
            Providing quality and affordable healthcare services in Chuka.
            We are committed to improving lives through compassionate care.
          </p>

          <div className="socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaTiktok /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/appointment">Book Appointment</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>Our Services</h4>
          <ul>
            <li>Outpatient Care</li>
            <li>Maternity</li>
            <li>Dental Surgery</li>
            <li>Ophthalmology</li>
            <li>Cardiology</li>
            <li>Pharmacy</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul className="contact-list">
            <li>
              <FaMapMarkerAlt className="icon" />
              Chuka, Ndagani
            </li>
            <li>
              <FaPhoneAlt className="icon" />
              +254 733 519 526
            </li>
            <li>
              <FaEnvelope className="icon" />
              info@jpmcthospital.org
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Joy Purveyors Medical Centre. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;