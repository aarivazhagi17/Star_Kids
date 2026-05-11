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
    agaramthen: "https://www.google.com/maps/place/Agaramthen,+Tamil+Nadu+600127/@12.8465824,80.1225433,15z/data=!3m1!4b1!4m6!3m5!1s0x3a5258579ef5b7e5:0xf7432d9d32261af3!8m2!3d12.8430289!4d80.1304858!16s%2Fg%2F12hrzvf9p?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
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
            STAR KIDZ IS A TRUSTED CHAIN OF PRESCHOOLS.
          </h4>

          <p data-aos="fade-down">
            Star Kidz has grown beautifully over the years and
            now we are present across Chennai in multiple
            locations for joyful learning.
          </p>

          <div className="location-buttons">
            <a data-aos="zoom-in-down"
              href={locations.agaramthen}
              target="_blank"
              rel="noreferrer"
            >
              Agaramthen
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