import React, { useEffect } from "react";
import "./Center.css";
import aos from "aos";
import "aos/dist/aos.css";

/* Baby Care */
import Baby from "../Center/Baby.jpg";
import Location from "../Center/Location.jpg";

import Footer from "./Footer";
function Center() {

  useEffect(() => {
    aos.init({
      duration: 2000,
      once: false
    });
  }, []);

  const locations = {
    maduravoyal:
      "https://www.google.com/maps?q=Maduravoyal,+Chennai",
    valasaravakkam:
      "https://www.google.com/maps?q=Valasaravakkam,+Chennai",
    alapakkam:
      "https://www.google.com/maps?q=Alapakkam,+Chennai",
  };
  
  return (
    <div>
    <section className="center-section">
      

      <div className="center-content">
        <img
          src={Baby}
          alt="Kids Learning"
          className="center-image"
        />

        <div className="overlay"></div>

        <div className="center-text">
          <h1>OUR CENTRES</h1>
          <p>
            We'd love for you and your child to visit your nearest
            <br />
            Star centers!
          </p>
        </div>
      </div>
    </section>


    <section className="location-section">
      <div className="location-box">

        {/* Left Content */}
        <div className="location-left">
          <h1 data-aos="fade-down">LOCATE OUR CENTRES</h1>

          <h4 data-aos="fade-down">
            STAR KIDS IS A TRUSTED CHAIN OF PRESCHOOLS.
          </h4>

          <p data-aos="fade-down">
            Star Kids has grown beautifully over the years and
            now we are present across Chennai in multiple
            locations for joyful learning.
          </p>

          <div className="location-buttons">
            <a data-aos="zoom-in-down"
              href={locations.maduravoyal}
              target="_blank"
              rel="noreferrer"
            >
              Maduravoyal
            </a>

            <a data-aos="zoom-in-down"
              href={locations.valasaravakkam}
              target="_blank"
              rel="noreferrer"
            >
              Valasaravakkam
            </a>

            <a data-aos="zoom-in-down"
              href={locations.alapakkam}
              target="_blank"
              rel="noreferrer"
            >
              Alapakkam
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="location-right">
          <img data-aos="zoom-in"
            src={Location}
            alt="School"
          />
        </div>

      </div>
    </section>
    <Footer/>


    </div>
  );
}

export default Center;