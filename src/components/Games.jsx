import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Games from "../video/Games.mp4";
import aos from "aos";
import "aos/dist/aos.css";
import './Games.css'

/*Games */
import game from "../Games/game.jpg";
import Action_Games from "../Games/Action_Games.jpg";
import Racing_Games from "../Games/Racing_Games.jpg";
import Adventure_Games from "../Games/Adventure_Games.jpg";
import Puzzle_Games from "../Games/Puzzle_Games.jpg";

/* Video */
import CVideo from "../video/CVideo.mp4";

/* Contact Component */
import Contact from "./Contact";

/* Footer */
import Footer from "./Footer"

function Home() {

  useEffect(() => {
    aos.init({
      duration: 2000,
      once: false
    });
  }, []);
  return (
    <div>

      <Carousel interval={3000}>
        <Carousel.Item>
          <video className="w-100" autoPlay muted loop>
            <source src={Games} type="video/mp4" />
          </video>

          <Carousel.Caption>
            <h1>Games World</h1>
            <p>Kids Learning</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container my-5">

        <div className="row align-items-center g-5 mb-5">
          <div className="col-md-6">
            <img data-aos="fade-right" src={Action_Games} className="img-fluid rounded shadow" alt="" />
          </div>
          <div className="col-md-6">
            <h2 data-aos="fade-down">Action Games</h2>
            <p data-aos="zoom-in">Action games give kids thrilling adventures full of energy and excitement. They help improve reflexes, concentration, and problem-solving skills through fun challenges and fast-paced gameplay. Every mission builds confidence, courage, and a spirit to win.</p>
          </div>
        </div>

        <div className="row align-items-center g-5 mb-5 flex-md-row-reverse">
          <div className="col-md-6">
            <img data-aos="fade-left" src={Racing_Games} className="img-fluid rounded shadow" alt="" />
          </div>
          <div className="col-md-6">
            <h2 data-aos="fade-down">Racing Games</h2>
            <p data-aos="zoom-in">Racing games bring speed, excitement, and endless fun for kids. They help improve focus, quick thinking, and hand-eye coordination while enjoying thrilling challenges. Every race teaches confidence, control, and the joy of reaching the finish line.</p>
          </div>
        </div>

        <div className="row align-items-center g-5 mb-5">
          <div className="col-md-6">
            <img data-aos="fade-right" src={Adventure_Games} className="img-fluid rounded shadow" alt="" />
          </div>
          <div className="col-md-6">
            <h2 data-aos="fade-down">Adventure Games</h2>
            <p data-aos="zoom-in">Adventure games take kids on exciting journeys filled with fun, imagination, and discovery. They help children build courage, improve decision-making skills, and explore new worlds through creative challenges. Every adventure brings learning, excitement, and confidence.</p>
          </div>
        </div>

        <div className="row align-items-center g-5 flex-md-row-reverse">
          <div className="col-md-6">
            <img data-aos="fade-left" src={Puzzle_Games} className="img-fluid rounded shadow" alt="" />
          </div>
          <div className="col-md-6">
            <h2 data-aos="fade-down">Puzzle Games</h2>
            <p data-aos="zoom-in">Puzzle games help kids improve memory, focus, and problem-solving skills in a fun way. Each challenge encourages children to think creatively, stay patient, and build confidence while learning. With every puzzle solved, young minds grow smarter and stronger.</p>
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

export default Home;