import React, { useEffect } from "react";
import "./About.css";
import aos from "aos";
import "aos/dist/aos.css";

/* Images*/
import About from "../About/About.jpg"

import Footer from "./Footer"

function Center() {

  useEffect(() => {
    aos.init({
      duration: 2000,
      once: false
    });
  }, []);
  return (
    <div>
      <section className="center-section">


        {/* Main Content */}
        <div className="center-content">
          <img
            src={About}
            alt="Kids Learning"
            className="center-image"
          />

          <div className="overlay"></div>

          <div className="center-text">
            <h1>ABOUT STAR</h1>
            <p>
              Our mission is to help every child grow with confidence, curiosity, and kindness during their early learning years.
              <br />
              STAR centers!
            </p>
          </div>
        </div>
      </section>

      {/* About section ku kila */}


      <section className="about-details">
        <div className="about-container">

          <h1 className="main-title" data-aos="fade-down">ABOUT STAR KIDS</h1>

          <div className="about-card">
            <h2 data-aos="fade-right">What We Offer</h2>
            <ul>
              <li data-aos="fade-right" data-aos-delay="1000">Playgroup Programs - Fun activities for early social and emotional growth</li>
              <li data-aos="fade-right" data-aos-delay="1100">Pre-KG LKG & UKG - Academic readiness through engaging methods</li>
              <li data-aos="fade-right" data-aos-delay="1200">Creative Learning - Art, music, storytelling, dance, and games</li>
              <li data-aos="fade-right" data-aos-delay="1300">Activity-Based Education - Hands-on learning experiences</li>
              <li data-aos="fade-right" data-aos-delay="1400">Safe Environment - Caring teachers and child-friendly classrooms</li>
            </ul>
          </div>

          <div className="about-card">
            <h2 data-aos="fade-right">Why Choose Star Kids?</h2>
            <ul>
              <li data-aos="fade-right" data-aos-delay="1000">Experienced and loving teachers</li>
              <li data-aos="fade-right" data-aos-delay="1100">Modern teaching methods</li>
              <li data-aos="fade-right" data-aos-delay="1200">Focus on communication and personality development</li>
              <li data-aos="fade-right" data-aos-delay="1300">Clean, colorful, and secure campus</li>
              <li data-aos="fade-right" data-aos-delay="1400">Strong parent-school connection</li>
            </ul>
          </div>

          <div className="about-card">
            <h2 data-aos="fade-right">Our Locations</h2>
            <ul>
              <li data-aos="fade-right" data-aos-delay="1000">Maduravoyal</li>
              <li data-aos="fade-right" data-aos-delay="1100">Valasaravakkam</li>
              <li data-aos="fade-right" data-aos-delay="1200">Alapakkam</li>
            </ul>
          </div>

          <div className="about-card">
            <h2 data-aos="fade-right">Vision</h2>
            <p data-aos="zoom-in" data-aos-delay="1000">
              To inspire young minds and create happy lifelong learners.
            </p>
          </div>
          
          <div className="about-card">
            <h2 data-aos="fade-right">Mission</h2>
            <p data-aos="zoom-in" data-aos-delay="1000">
              To provide quality preschool education that balances learning,
              fun, discipline, and creativity.
            </p>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Center;