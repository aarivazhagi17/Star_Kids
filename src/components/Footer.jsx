import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section text-white pt-5 pb-4 mt-5">
      <Container fluid className="px-0">

        <Row className="text-center mb-5">
          <Col>
            <h1 className="fw-bold display-5">STAR KIDZ</h1>

            <p className="text-light mt-3 fs-5">
              South India's trusted preschool chain for joyful learning,
              creativity and child development.
            </p>
          </Col>
        </Row>

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
            <p>Instagram</p>
            <p>Facebook</p>
            <p>YouTube</p>
          </Col>

        </Row>

        <hr className="border-secondary my-4" />

        <Row>
          <Col className="text-center">
            <p className="mb-0">
              © Star Kidz Preschool. Nurturing Little Minds, Building Bright Futures.
            </p>

            <p className="mb-0 mt-2">
              Agaramthen
            </p>

            <p className="mb-0 mt-2">
              📞{" "}
              <a href="tel:+919500092856" className="footer-link">
                +91 95000 92856
              </a> <span><a href="tel:+919944008221" className="footer-link">
                +91 99440 08221</a></span>{" "}
              | ✉️{" "}
              <a href="mailto:starkidzworldpreschool@gmail.com" className="footer-link">
                starkidzworldpreschool@gmail.com
              </a>
            </p>
          </Col>
        </Row>

      </Container>
    </footer>
  );
}

export default Footer;