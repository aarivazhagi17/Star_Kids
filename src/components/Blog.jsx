import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

import Fun_Learning from "../Blog/Fun_Learning.jpg";
import Healthy_Habits from "../Blog/Healthy_Habits.jpg";
import Reading from "../Blog/Reading.jpg";
import Kids_Fitness from "../Blog/Kids_Fitness.jpg";
import Art_Games from "../Blog/Art_Games.jpg";
import Kids_Study from "../Blog/Kids_Study.jpg";

import "./Blog.css";

/* Video */
import CVideo from "../video/CVideo.mp4";

/* Contact Component */
import Contact from "./Contact";

/* Footer */
import Footer from "./Footer";


function Blog() {

  useEffect(() => {
    aos.init({
      duration: 2000,
      once: false
    });
  }, []);
  return (
    <div className="container-fluid mt-5 py-5">

      <div className="row g-4">

        <div data-aos="fade-down" className="col-md-4">
          <div className="blog-card">
            <img src={Fun_Learning} className="img-fluid" alt="" />
            <h3>Fun Learning Activities</h3>
            <p>Creative games and playful learning ideas for kids.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div data-aos="fade-down" className="blog-card">
            <img src={Healthy_Habits} className="img-fluid" alt="" />
            <h3>Healthy Sleep Routine</h3>
            <p>Build bedtime habits for peaceful sleep.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div data-aos="fade-down" className="blog-card">
            <img src={Reading} className="img-fluid" alt="" />
            <h3>Reading Corner Ideas</h3>
            <p>Create a cozy reading corner at home for children.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div data-aos="fade-down" className="blog-card">
            <img src={Kids_Fitness} className="img-fluid" alt="" />
            <h3>Kids Fitness Games</h3>
            <p>Fun indoor and outdoor games for healthy kids.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div data-aos="fade-down" className="blog-card">
            <img src={Art_Games} className="img-fluid" alt="" />
            <h3>Art & Craft Time</h3>
            <p>Creative crafts that boost imagination and joy.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div data-aos="fade-down" className="blog-card">
            <img src={Kids_Study} className="img-fluid" alt="" />
            <h3>Smart Study Tips</h3>
            <p>Easy study methods for better focus and learning.</p>
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
      <Footer />

    </div>
  );
}

export default Blog;