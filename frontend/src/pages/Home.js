import '../styles/home.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import about from "../purveyors_images/about.jpg";

import client1 from "../purveyors_images/jplogo.png";
import client2 from "../purveyors_images/jplogo.png";
import client3 from "../purveyors_images/jplogo.png";
import client4 from "../purveyors_images/jplogo.png";

function Home() {

  const testimonials = [
    {
      name: "Ralph Gonzales",
      role: "Patient",
      image: client1,
      text: "Excellent service and caring doctors. I felt safe and well attended."
    },
    {
      name: "Sarah Mitchell",
      role: "Patient",
      image: client2,
      text: "Modern equipment and very friendly staff. Highly recommended!"
    },
    {
      name: "James Carter",
      role: "Patient",
      image: client3,
      text: "Quick response and professional care. Truly impressive service."
    },
    {
      name: "Linda Brown",
      role: "Patient",
      image: client4,
      text: "Affordable and reliable healthcare. I trust this hospital."
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="overlay">
          <div className="hero-content">
            <h1>Meet With Your Best Doctor In Here</h1>
            <p>Empowering healthcare, Enriching lives.</p>

            <div className="hero-buttons">
              <Link to="/appointment" className="btn-primary">Book Appointment</Link>
              <Link to="/about" className="btn-secondary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-new">
        <div className="why-container">

          <div className="why-left">

            <h5 className="why-title">WHY CHOOSE US</h5>

            <h2 className="why-heading">
              Our hospital has professional doctors who provide low cost 24 hour service
            </h2>

            <p className="why-desc">
              We provide high-quality healthcare using modern technology and experienced specialists.
            </p>

            <div className="timeline">

              <div className="timeline-item">
                <div className="circle">1</div>
                <div>
                  <h3>Modern Technology</h3>
                  <p>Advanced equipment for accurate diagnosis.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="circle dark">2</div>
                <div>
                  <h3>Professional Doctors</h3>
                  <p>Experienced and compassionate medical team.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="circle">3</div>
                <div>
                  <h3>24/7 Services</h3>
                  <p>We are always available for emergencies.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="circle dark">4</div>
                <div>
                  <h3>Affordable Care</h3>
                  <p>Accessible healthcare with insurance support.</p>
                </div>
              </div>

            </div>
          </div>

          <div className="why-right">
            <img src={about} alt="Doctors" />

            <div className="emergency-card">
              <span>🚑 24/7 Hours Service</span>
              <h3>0733 519 526</h3>
            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="testimonials-content">

          <h5>OUR CLIENTS</h5>
          <h2>Our happy clients say about us</h2>

          <div className="testimonial-card">

            <div className="testimonial-header">
              <img src={current.image} alt="client" />
              <div>
                <h3>{current.name}</h3>
                <span>{current.role}</span>
              </div>
            </div>

            <p>{current.text}</p>

            <div className="testimonial-quote">❝❞</div>

          </div>

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