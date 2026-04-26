import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [searchCity, setSearchCity] = useState("");

  const cities = [
    "Chennai",
    "Tambaram",
    "Velachery",
    "Guindy",
    "Anna Nagar",
    "T Nagar",
    "Porur",
    "Mylapore",
    "Adyar",
    "OMR",
    "Medavakkam",
    "Sholinganallur",
    "Perungudi",
    "Ambattur",
    "Avadi",
    "Poonamallee",
    "Mumbai",
    "Bangalore"
  ];

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchCity.toLowerCase())
  );

  return (
    <div className="contact-page">
      <div className="contact-box">

        <h1>Admission Form</h1>
        <p>Apply for Star Kids Programs</p>

        <form>

          {/* Parent Name */}
          <input type="text" placeholder="Parent Name" required />

          {/* Child Name */}
          <input type="text" placeholder="Children Name" required />

          {/* Email */}
          <input type="email" placeholder="Email ID" required />

          {/* Phone */}
          <input type="tel" placeholder="Phone Number" required />

          {/* Programs */}
          <select required>
            <option value="">Select Program</option>
            <option>Pre KG (2.5 to 3.5)</option>
            <option>LKG (3.5 to 4.5)</option>
            <option>UKG (4.5 to 5.5)</option>
          </select>

          {/* Search City */}
          <input
            type="text"
            placeholder="Search City"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />

          {/* City Dropdown */}
          <select required>
            <option value="">Select Center City</option>

            {filteredCities.map((city, index) => (
              <option key={index}>{city}</option>
            ))}

            <option>Other (Type Below)</option>
          </select>

          {/* Custom City */}
          <input type="text" placeholder="Type Your City (if not listed)" />

          {/* Message */}
          <textarea rows="4" placeholder="Message"></textarea>

          {/* Terms */}
          <label className="check-box">
            <input type="checkbox" required />
            I agree Terms & Conditions
          </label>

          {/* Button */}
          <button type="submit">Apply Now</button>

        </form>

      </div>
    </div>
  );
}

export default Contact;