import React from "react";
import "./Programs.css";

import Reading from "../Blog/Reading.jpg";
import Kids_Fitness from "../Blog/Kids_Fitness.jpg";
import Art_Games from "../Blog/Art_Games.jpg";
import Kids_Study from "../Blog/Kids_Study.jpg";

import Footer from "./Footer"

function Programs() {
  return (
    <div className="programs-page">

      {/* Banner */}
      <div className="program-banner">
        <img src={Reading} alt="" className="banner-img" />

        <div className="banner-content">
          <h1>Our Programs</h1>
          <p>
            Fun, learning, creativity and growth programs designed for children.
          </p>
        </div>
      </div>


      <div className="container py-5">

        <div className="row g-4">

          <div className="col-md-6 col-lg-3">
            <div className="program-card">
              <img src={Kids_Fitness} alt="" />
              <h3>Play Group</h3>
              <p>Interactive play activities for young kids.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="program-card">
              <img src={Art_Games} alt="" />
              <h3>Activity Class</h3>
              <p>Creative dance, drawing and fun sessions.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="program-card">
              <img src={Kids_Study} alt="" />
              <h3>Academic Skills</h3>
              <p>Basic reading, writing and number learning.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="program-card">
              <img src={Kids_Fitness} alt="" />
              <h3>Yoga & Fitness</h3>
              <p>Healthy exercises for active children.</p>
            </div>
          </div>

        </div>

      </div>
      <Footer/>

    </div>
  );
}

export default Programs;