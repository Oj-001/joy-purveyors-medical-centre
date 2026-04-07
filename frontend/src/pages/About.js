import '../styles/about.css';
import heroBg from '../purveyors_images/JoybackgroundIMG.png';

// 👇 add your images here
import doctorsImg from '../purveyors_images/about.jpg';
import expertImg from '../purveyors_images/about.jpg';
import techImg from '../purveyors_images/about.jpg';
import careImg from '../purveyors_images/about.jpg';
import patientImg from '../purveyors_images/about.jpg';

function About() {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <div
        className="about-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="overlay">
          <h1>About Us</h1>
        </div>
      </div>

      {/* TOP SECTION (TEXT + IMAGE) */}
      <div className="about-top">

        {/* LEFT TEXT */}
        <div className="about-text">
          <h2>Delivering Top-Tier Medical Care</h2>

          <p>
            At JOY Purveyors Medical Training Center & Hospital, we are committed
            to delivering exceptional healthcare through innovation, compassion,
            and professionalism. Our services are designed to meet the unique
            needs of every patient.
          </p>

          <p>
            With highly qualified medical practitioners and modern facilities,
            we ensure accurate diagnosis, effective treatment, and a comfortable
            healing experience for all.
          </p>

          <p>
            We continue to build trust by providing affordable, accessible, and
            high-quality healthcare services to our community.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image">
          <img src={doctorsImg} alt="Doctors smiling" />
        </div>

      </div>

      {/* FEATURES / CARDS */}
      <div className="about-cards">

        <div className="card">
          <img src={expertImg} alt="Experts" />
          <h3>Qualified Experts</h3>
          <p>
            Our experienced professionals deliver advanced medical care backed
            by years of clinical expertise and proven methodologies.
          </p>
        </div>

        <div className="card">
          <img src={techImg} alt="Technology" />
          <h3>Modern Technology</h3>
          <p>
            We use state-of-the-art equipment to ensure precise diagnosis and
            effective treatment for all patients.
          </p>
        </div>

        <div className="card">
          <img src={careImg} alt="Care" />
          <h3>Comprehensive Care</h3>
          <p>
            From children to adults, we provide complete healthcare solutions
            tailored to every stage of life.
          </p>
        </div>

        <div className="card">
          <img src={patientImg} alt="Patient Care" />
          <h3>Patient-Centered Care</h3>
          <p>
            We prioritize comfort, compassion, and personalized attention in
            every step of your healthcare journey.
          </p>
        </div>

      </div>

    </div>
  );
}

export default About;