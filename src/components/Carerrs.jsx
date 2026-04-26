import React from "react";
import "./Carerrs.css";
import { useNavigate } from "react-router-dom";
import Together from "../Images/Together.jpg";

import Carier from "../video/Carier.mp4"

/* Video */
import CVideo from "../video/CVideo.mp4";

/* Contact Component */
import Contact from "./Contact";

/* Footer */
import Footer from "./Footer"

function Carerrs() {

  const navigate = useNavigate();
  return (
    <div className="careers-page">

     
      <div className="career-banner">
        <img src={Together} alt="Teachers" className="career-img" />

        <div className="career-overlay">
          <h1>CAREERS</h1>
          <p>
            Join our passionate team of teachers and shape the future
            of young learners with care, creativity, and confidence.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-5">

        <div className="row align-items-center g-5">

          <div className="col-md-6">
  <video
    className="career-video img-fluid rounded shadow"
    autoPlay
    muted
    loop
    controls >
    <source src={Carier} type="video/mp4" />
  </video>
</div>

          <div className="col-md-6">
            <h2>Become a Teacher With Us</h2>

            <p>
              We are looking for dedicated, caring, and creative teachers
              who love working with children. Join our school and inspire
              the next generation through joyful learning.
            </p>

            <ul>
              <li>Friendly Work Environment</li>
              <li>Career Growth Opportunities</li>
              <li>Training & Development</li>
              <li>Attractive Salary</li>
            </ul>

            <button
      className="apply-btn"
      onClick={() => navigate("/")} >
      Apply Now
    </button>
          </div>

        </div>

      </div>


      {/* Contact Page Section*/}

<div className="contact-grid-section container-fluid">

  <div className="row align-items-center g-4">

    {/* Left Side Video */}
    <div className="col-lg-6 col-md-12">

      <div className="video-box">
  <video
    autoPlay
    muted
    loop
    controls
    className="contact-video"
  >
    <source src={CVideo} type="video/mp4" />
  </video>
</div>

    </div>

    {/* Right Side Form */}
    <div className="col-lg-6 col-md-12">

      <Contact />

    </div>

  </div>

</div>
<Footer/>

    </div>
  );
}

export default Carerrs;