import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';
import { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">

        {/* LOGO */}
        <div className="top-logo">
          <img src="/purveyors_images/logo.png" alt="logo" />
          {/* Put your logo inside: public/purveyors_images/logo.png */}

          <div>
            <h2>JOY PURVEYORS</h2>
            <span>Medical Centre</span>
          </div>
        </div>

        {/* INFO */}
        <div className="top-info">

          <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <div>
              <small>Location</small>
              <p>Chuka, Ndagani</p>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope className="icon" />
            <div>
              <small>Email Address</small>
              <p>info@jpmtchospital.org</p>
            </div>
          </div>

        </div>

        {/* HOTLINE */}
        <div className="top-hotline">
          Hotline - +254 733 519 526
        </div>

      </div>

      {/* NAVBAR */}
      <nav className={scrolled ? "navbar scrolled" : "navbar"}>

        {/* MOBILE MENU */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* NAV LINKS */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li>
            <Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
          </li>

          <li>
            <Link className={location.pathname === "/about" ? "active" : ""} to="/about">About</Link>
          </li>

          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>
            <Link className={location.pathname === "/contact" ? "active" : ""} to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/appointment" className="btn-book">
              Book Appointment
            </Link>
          </li>

        </ul>

      </nav>
    </>
  );
}

export default Navbar;