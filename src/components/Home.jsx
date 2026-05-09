import React, { useEffect} from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate } from "react-router-dom";
import aos from "aos";
import "aos/dist/aos.css";
import "./Home.css";

/* Center */
import Together from "../Images/Together.jpg";
import Study from "../Images/Study.jpg";
import Yoga from "../Images/Yoga.jpg";
import Table from "../Images/Table.jpg";

/* About */
import Play from "../Images/Play.jpg";
import Activity from "../Images/Activity.jpg";
import Academic from "../Images/Academic.jpg";

/* Video */
import CVideo from "../video/CVideo.mp4";

/* Contact Component */
import Contact from "./Contact";

import Footer from "./Footer"
function Home() {

  useEffect(() => {
    aos.init({
      duration: 2000,
      once: false
    });
  }, []);

    const navigate = useNavigate();

  return (
    <div className="home-page">

      <div className="slider-wrapper">
        <Carousel fade controls indicators interval={3000}>

          <Carousel.Item>
            <img className="d-block w-100 slider-img" src={Together} alt="" />
            <Carousel.Caption>
              <h1>Welcome To Star Kidz</h1>
              <p >Fun learning for every child</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100 slider-img" src={Study} alt="" />
            <Carousel.Caption>
              <h1>Creative Activities</h1>
              <p>Play, Learn & Grow Together</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100 slider-img" src={Yoga} alt="" />
            <Carousel.Caption>
              <h1>Smart Education</h1>
              <p>Modern skills for future kidz</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100 slider-img" src={Table} alt="" />
            <Carousel.Caption>
              <h1>Join With Us</h1>
              <p>Happy environment for children</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </div>

      {/* About Section - Contact mela add panniruken */}
<div className="about-section">

  {/* Left Image */}
  <div className="about-left">
    <img data-aos="fade-zoom" src={Together} alt="kids" />
  </div>

  {/* Right Content */}
  <div className="about-right">
    <h1 data-aos="fade-down">
      STAR KIDZ CENTERS ARE <br />
      DESIGNED TO BE A <br />
      HOME AWAY FROM HOME
    </h1>

    <h3 data-aos="fade-down">
      WHERE CHILDREN CAN LAUGH, GROW, HAVE FUN AND
      LEARN AT THEIR OWN PACE.
    </h3>

    <p data-aos="fade-down">
      Everything about our centers reflects our understanding
      of children and their development. The center is set up
      to support your child's success and provide confidence
      and peace of mind.
    </p>

    <button data-aos="fade-zoom" onClick={() => navigate("/center")}>
      CENTRES ❯
    </button>
  </div>

</div>

<div className="program-section">

  {/* Play */}
  <div data-aos="fade-zoom" className="program-card">
    <img src={Play}  alt="Play" />

    <div className="program-overlay">
      <h2>PLAY</h2>

      <button onClick={() => navigate("/games")}>
        View More
      </button>
    </div>
  </div>

  {/* Activity */}
  <div className="program-card">
    <img src={Activity} alt="Activity" />

    <div className="program-overlay">
      <h2>ACTIVITY</h2>

      <button onClick={() => navigate("/blog")}>
        View More
      </button>
    </div>
  </div>

  {/* Academic */}
  <div className="program-card">
    <img src={Academic} alt="Academic" />

    <div className="program-overlay">
      <h2>ACADEMIC</h2>

      <button onClick={() => navigate("/academic")}>
        View More
      </button>
    </div>
  </div>

</div>


{/* About Bottom Section - Program kila add */}

<div className="bottom-about-section container-fluid">

  <div className="row align-items-center">

    <div data-aos="flip-left" className="col-lg-6 col-md-12 text-center">
      <img
        src={Table}
        alt="About"
        className="bottom-about-img"
      />
    </div>

    <div className="col-lg-6 col-md-12 bottom-about-left">
      <h1 data-aos="fade-down">ABOUT STAR KIDZ</h1>

      <h3 data-aos="fade-down">
        WHERE CHILDREN LEARN, PLAY AND GROW
      </h3>

      <p data-aos="fade-down">
        Star Kidz provides a joyful learning environment
        with activities, academic growth and playful
        experiences for every child.
      </p>

      <button data-aos="fade-zoom" onClick={() => navigate("/about")}>
        ABOUT ❯
      </button>
    </div>

    

  </div>

</div>


      {/* Contact Page Section */}

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

    {/* Right Side Admission Form */}
    <div className="col-lg-6 col-md-12">

      <Contact />

    </div>

  </div>

</div>
<Footer/>

    </div>
  );
}

export default Home;