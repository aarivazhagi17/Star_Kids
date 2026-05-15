import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section text-white pt-5 pb-4 mt-5">
      <Container>

        {/* Top Section */}
        <Row className="text-center mb-5">
          <Col>
            <h1 className="fw-bold display-5">STAR KIDZ</h1>

            <p className="text-light mt-3 fs-5 mb-2">
              Leo Vishnu Villa, Plot No: 12,
            </p>

            <p className="text-light fs-6 mb-2">
              Paduvanchery, Madambakkam, Agaramthen,
              Chennai, Tamil Nadu - 600126
            </p>

            <p className="mb-2">
              ✉️{" "}
              <a
                href="mailto:starkidzworldpreschool@gmail.com"
                className="footer-link"
              >
                starkidzworldpreschool@gmail.com
              </a>
            </p>

            <p className="mb-0">
              📞{" "}
              <a href="tel:+919500092856" className="footer-link">
                +91 95000 92856
              </a>{" "}
              |{" "}
              <a href="tel:+919944008221" className="footer-link">
                +91 99440 08221
              </a>
            </p>
          </Col>
        </Row>

        {/* Footer Links */}
        <Row className="text-center text-md-start g-4">

          <Col md={3} sm={6}>
            <h5 className="fw-bold text-warning">Explore</h5>
            <p>About Us</p>
            <p>Centers</p>
            <p>Gallery</p>
          </Col>

          <Col md={3} sm={6}>
            <h5 className="fw-bold text-warning">Programs</h5>
            <p>Play</p>
            <p>Activity</p>
            <p>Academic</p>
          </Col>

          <Col md={3} sm={6}>
            <h5 className="fw-bold text-warning">Support</h5>
            <p>Admissions</p>
            <p>Careers</p>
            <p>Contact</p>
          </Col>

          <Col md={3} sm={6}>
            <h5 className="fw-bold text-warning">Follow Us</h5>

            <p>
              <a
                href="https://www.instagram.com/star_kidz_world_preschool?igsh=MWFjOXV2MGE5MTBmdA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Instagram
              </a>
            </p>

            <p>
              <a
                href="https://www.youtube.com/@StarKidzWorldPreschool"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                YouTube
              </a>
            </p>
          </Col>

        </Row>

        <hr className="border-secondary my-4" />

        {/* Bottom Section */}
        <Row>
          <Col className="text-center">

            <p className="mb-2">
              © Copyright StarKidz World Preschool. All Rights Reserved.
            </p>

            <p className="mb-0">
              Designed By{" "}
              <a
                href="https://kbssitsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footerlink"
              >
                KBSS IT Solutions
              </a>
            </p>

          </Col>
        </Row>

      </Container>
    </footer>
  );
}

export default Footer;