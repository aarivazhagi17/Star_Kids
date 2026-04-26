import React from "react";
import "./About.css";

import About from "../About/About.jpg"

import Footer from "./Footer"

function Center() {
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
              SEED centers!
            </p>
          </div>
        </div>
      </section>

      {/* About section ku kila */}


      <section className="about-details">
        <div className="about-container">

          <h1 className="main-title">ABOUT STAR KIDS</h1>

          <div className="about-card">
            <h2>What We Offer</h2>
            <ul>
              <li>Playgroup Programs - Fun activities for early social and emotional growth</li>
              <li>Pre-KG & KG - Academic readiness through engaging methods</li>
              <li>Creative Learning - Art, music, storytelling, dance, and games</li>
              <li>Activity-Based Education - Hands-on learning experiences</li>
              <li>Safe Environment - Caring teachers and child-friendly classrooms</li>
            </ul>
          </div>

          <div className="about-card">
            <h2>Why Choose Star Kids?</h2>
            <ul>
              <li>Experienced and loving teachers</li>
              <li>Modern teaching methods</li>
              <li>Focus on communication and personality development</li>
              <li>Clean, colorful, and secure campus</li>
              <li>Strong parent-school connection</li>
            </ul>
          </div>

          <div className="about-card">
            <h2>Our Locations</h2>
            <ul>
              <li>Maduravoyal</li>
              <li>Valasaravakkam</li>
              <li>Alapakkam</li>
            </ul>
          </div>

          <div className="about-card">
            <h2>Vision</h2>
            <p>
              To inspire young minds and create happy lifelong learners.
            </p>
          </div>
          
          <div className="about-card">
            <h2>Mission</h2>
            <p>
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