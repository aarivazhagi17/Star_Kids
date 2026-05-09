import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    parentName: "",
    childrenName: "",
    email: "",
    phoneNumber: "",
    program: "",
    centerCity: "",
    message: "",
  });

  const cities = [
    "Chennai", "Tambaram", "Velachery", "Guindy", "Anna Nagar",
    "T Nagar", "Porur", "Mylapore", "Adyar", "OMR",
    "Medavakkam", "Sholinganallur", "Perungudi", "Ambattur",
    "Avadi", "Poonamallee", "Mumbai", "Bangalore"
  ];

  const programs = [
    "PLAY GROUP (2 to 3)",
    "NURSERY (3 to 4)",
    "LKG (4 to 5)",
    "UKG (5 to 6)"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only letters for names
    if (
      (name === "parentName" || name === "childrenName") &&
      !/^[A-Za-z\s]*$/.test(value)
    ) {
      return;
    }

    // Only numbers for phone
    if (name === "phoneNumber" && !/^[0-9]*$/.test(value)) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      alert("Enter Valid Email ID");
      return;
    }

    if (formData.phoneNumber.length !== 10) {
      alert("Phone Number must be exactly 10 digits");
      return;
    }

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/contact`,
        formData
      );

      alert("Form Submitted Successfully");

      setFormData({
        parentName: "",
        childrenName: "",
        email: "",
        phoneNumber: "",
        program: "",
        centerCity: "",
        message: "",
      });

    } catch (error) {
      console.log(error);
      alert("Submission Failed");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-box">

        <h1>Admission Form</h1>
        <p>Apply for Star Kidz Programs</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="parentName"
            placeholder="Parent Name"
            value={formData.parentName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="childrenName"
            placeholder="Children Name"
            value={formData.childrenName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            maxLength={10}
            minLength={10}
            pattern="[0-9]{10}"
            title="Phone number must be exactly 10 digits"
            required
          />

          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            required
          >
            <option value="">Select Program</option>

            {programs.map((program, index) => (
              <option key={index}>{program}</option>
            ))}
          </select>

          <select
            name="centerCity"
            value={formData.centerCity}
            onChange={handleChange}
            required
          >
            <option value="">Select Center City</option>

            {cities.map((city, index) => (
              <option key={index}>{city}</option>
            ))}
          </select>

          <textarea
            rows="4"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Apply Now</button>

        </form>

      </div>
    </div>
  );
}

export default Contact;