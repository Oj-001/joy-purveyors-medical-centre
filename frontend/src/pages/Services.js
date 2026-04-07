import '../styles/services.css';
import { FaHeartbeat, FaTooth, FaEye, FaClinicMedical, FaBaby, FaPills } from 'react-icons/fa';

function Services() {
  return (
    <section className="services-section">

      {/* HEADER */}
      <div className="services-header">
        <h1>Our Services</h1>
        <div className="underline"></div>

        <p>
          We provide high-quality medical services using modern equipment 
          and experienced healthcare professionals to ensure the best care.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="services-grid">

        <div className="service-card">
          <div className="icon-box"><FaClinicMedical /></div>
          <h3>Outpatient Care</h3>
          <p>Quick and efficient diagnosis and treatment for walk-in patients.</p>
        </div>

        <div className="service-card">
          <div className="icon-box"><FaBaby /></div>
          <h3>Maternity</h3>
          <p>Comprehensive maternal care for safe pregnancy and delivery.</p>
        </div>

        <div className="service-card">
          <div className="icon-box"><FaTooth /></div>
          <h3>Dental Surgery</h3>
          <p>Professional dental services for oral health and hygiene.</p>
        </div>

        <div className="service-card">
          <div className="icon-box"><FaEye /></div>
          <h3>Ophthalmology</h3>
          <p>Advanced eye care services for vision and eye health.</p>
        </div>

        <div className="service-card">
          <div className="icon-box"><FaHeartbeat /></div>
          <h3>Cardiology</h3>
          <p>Diagnosis and treatment of heart-related conditions.</p>
        </div>

        <div className="service-card">
          <div className="icon-box"><FaPills /></div>
          <h3>Pharmacy</h3>
          <p>Access to quality medicines and pharmaceutical advice.</p>
        </div>

      </div>

    </section>
  );
}

export default Services;