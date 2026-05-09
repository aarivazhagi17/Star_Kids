// Gallery.jsx
import React, { useState } from "react";
import "./Gallery.css";

import Footer from "./Footer";
/* Activities */
import Parents from "../Gallery/Parents.jpg";
import Parents1 from "../Gallery/Parents1.jpg";
import Parents2 from "../Gallery/Parents2.jpg";
import Parents3 from "../Gallery/Parents3.jpg";
import Parents4 from "../Gallery/Parents4.jpg";

import Activity from "../Gallery/Activity.jpg";
import Activity1 from "../Gallery/Activity1.jpg";
import Activity2 from "../Gallery/Activity2.jpg";

    
const galleryData = {
  Events: [Parents, Parents1, Parents2, Parents3, Parents4],
  Activities: [Activity, Activity1, Activity2],
};

function Gallery() {
  const [activeTab, setActiveTab] = useState("Activities");

  return (
    <div>
    <div className="gallery-page">
      <div className="gallery-box">

        <p className="gallery-subtitle">Star Kidz World Preschool</p>

        {/* Heading Buttons */}
        <div className="gallery-tabs">
          {Object.keys(galleryData).map((tab, index) => (
            <button
              key={index}
              className={activeTab === tab ? "tab active" : "tab"}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Images */}
        <div className="gallery-grid">
          {galleryData[activeTab].map((image, index) => (
            <div className="gallery-card" key={index}>
              <img src={image} alt="gallery" />
            </div>
          ))}
        </div>

      </div>
    </div>
    <div className="Footer">
    <Footer/>
    </div>
    </div>
  );
}

export default Gallery;