import '../styles/services.css';
import { 
  FaBaby, 
  FaStethoscope, 
  FaHospitalAlt, 
  FaUserMd, 
  FaEye, 
  FaTooth, 
  FaPills, 
  FaChalkboardTeacher 
} from 'react-icons/fa';

function Services() {
  return (
    <section className="services-section">

      {/* HEADER */}
      <div className="services-header">
        <h1>Our Services</h1>
        <div className="underline"></div>

        <p>
          We provide comprehensive healthcare services using modern technology 
          and experienced professionals to ensure quality patient care.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="services-grid">

        <div className="service-card">
          <div className="icon-box"><FaBaby /></div>
          <h3>Pediatric Healthcare</h3>
          <p>Specialized medical care for infants, children, and adolescents to ensure healthy growth and development.</p>
        </div>

        <div className="service-card">
          <div className="icon-box"><FaStethoscope /></div>
          <h3>Medical Check-up & Treatment</h3>
          <p>Comprehensive diagnosis, routine check-ups, and effective treatment for various medical conditions.</p>
        </div>

        <div className="service-card">
          <div className="icon-box"><FaUserMd /></div>
          <h3>Maternity Services</h3>
          <p>Safe and supportive care for expectant mothers throughout pregnancy, delivery, and post-delivery.</p>
        </div>

        <div className="service-card">
          <div className="icon-box"><FaHospitalAlt /></div>
          <h3>Inpatient Services</h3>
          <p>Quality inpatient care with comfortable facilities and continuous monitoring by our medical team.</p>
        </div>

        <div className="service-card">
          <div className="icon-box"><FaUserMd /></div>
          <h3>Antenatal & Postnatal Care</h3>
          <p>Dedicated care before and after childbirth to ensure the health of both mother and baby.</p>
        </div>

        <div className="service-card">
          <div className="icon-box"><FaChalkboardTeacher /></div>
          <h3>Training & Capacity Building</h3>
          <p>Professional training programs aimed at improving healthcare skills and knowledge in the community.</p>
        </div>

        <div className="service-card">
          <div className="icon-box">
            <>
              <FaEye /> <FaTooth />
            </>
          </div>
          <h3>Eye & Dental Clinic</h3>
          <p>Comprehensive eye and dental services including diagnosis, treatment, and preventive care.</p>
        </div>

        <div className="service-card">
          <div className="icon-box"><FaPills /></div>
          <h3>Pharmacy & Ultrasound</h3>
          <p>Access to quality medications and advanced ultrasound imaging for accurate diagnosis.</p>
        </div>

      </div>

    </section>
  );
}

export default Services;