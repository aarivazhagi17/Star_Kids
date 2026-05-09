import React from "react";
import "./Academic.css";

import Footer from "./Footer";

function Academic() {
  const reviews = [
    {
      name: "Priya M",
      text: "Star Kidz has helped my child improve speaking and confidence. Excellent teachers!",
    },
    {
      name: "Mukil R",
      text: "Best preschool experience. My son loves coming here every day.",
    },
    {
      name: "Subha S",
      text: "Very caring staff and activity based learning system. Highly recommended.",
    },
    {
      name:"Sujitha A",
      text: "Safe environment and strong academic foundation for kids.",
    },
    {
      name: "Tamil A",
      text: "My daughter enjoys learning through fun activities. Wonderful school.",
    },
  ];

  return (
    <div>
    <section className="reviews-section">
      <h2 className="review-title">Parents Feedback</h2>

      <div className="reviews-slider">
        <div className="reviews-track">
          {[...reviews, ...reviews].map((item, index) => (
            <div className="review-card" key={index}>
              <p className="review-text">"{item.text}"</p>
              <h4 className="review-name">- {item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer/>
    </div>
  );
}

export default Academic;