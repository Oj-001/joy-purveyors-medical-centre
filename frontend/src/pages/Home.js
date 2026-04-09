import '../styles/home.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import about from "../purveyors_images/about.jpg";

import client1 from "../purveyors_images/omar.jpeg";
import client2 from "../purveyors_images/cate.jpg";
import client3 from "../purveyors_images/ouma.jpeg";
import client4 from "../purveyors_images/oj.jpeg";

function Home() {

  const testimonials = [
    {
      name: "Hanningtone Ochieng",
      role: "Patient",
      image: client1,
      text: "I am grateful for the outstanding service I received at Joy Purveyors Hospital. The team demonstrated high levels of expertise and empathy throughout my treatment. Communication was clear, and follow-up care was impressive. It is a facility that genuinely prioritizes patient well-being and delivers healthcare with professionalism and respect."
    },
    {
      name: "Catherine Chepkorir",
      role: "Patient",
      image: client2,
      text: "My visit to Joy Purveyors Hospital was truly reassuring. The staff handled my case with urgency and compassion, making me feel safe and well cared for. Their modern facilities and efficient service delivery stood out. I appreciate the effort they put into patient care and would confidently recommend them."
    },
    {
      name: "Anthony Ouma",
      role: "Patient",
      image: client3,
      text: "Joy Purveyors Hospital exceeded my expectations in every way. From the reception to the treatment rooms, everything was well organized. The medical staff showed genuine care and professionalism. I felt valued as a patient, and my recovery process was smooth thanks to their continuous support and dedication."
    },
    {
      name: "Daniel Ojulu",
      role: "Patient",
      image: client4,
      text: "I had an excellent experience at Joy Purveyors Hospital. The doctors were attentive, professional, and took time to explain my condition clearly. The nurses were kind and responsive, ensuring I was comfortable throughout my stay. The environment was clean and welcoming. I highly recommend their services to anyone seeking quality healthcare."
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