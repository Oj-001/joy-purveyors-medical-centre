import '../styles/home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">

        {/* IMPORTANT:
           Put your image here:
           public/purveyors_images/hero.jpg */}

        <div className="overlay">
          <div className="hero-content">

            <h1>Meet With Your Best Doctor In Here</h1>

            <p>
              Empowering healthcare, Enriching lives.
              
            </p>

            <div className="hero-buttons">
              <Link to="/appointment" className="btn-primary">
                Book Appointment
              </Link>

              <Link to="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>About Our Hospital</h2>
        <p>
          Our qualified experts deliver exceptional healthcare backed by years of experience 
          and advanced treatment methodologies. We employ state-of-the-art medical technologies 
          for precise diagnosis and effective patient care.
        </p>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="card">Outpatient Services</div>
          <div className="card">Maternity Care</div>
          <div className="card">Dental Clinic</div>
          <div className="card">Eye Clinic</div>
          <div className="card">Pharmacy & Ultrasound</div>
          <div className="card">Inpatient Services</div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why">
        <h2>Why Choose Us</h2>
        <div className="why-grid">
          <div>✔ Qualified Doctors</div>
          <div>✔ 24/7 Services</div>
          <div>✔ Modern Equipment</div>
          <div>✔ Affordable Care</div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Need Medical Attention?</h2>
        <p>We are open 24/7 to serve you</p>
        <Link to="/appointment" className="btn-primary">Book Appointment</Link>
      </section>

    </div>
  );
}

export default Home;