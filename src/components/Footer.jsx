import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section text-white pt-5 pb-4 mt-5">
      <Container fluid className="px-0">

        <Row className="text-center mb-5">
          <Col>
            <h1 className="fw-bold display-5">STAR KIDS</h1>

            <p className="text-light mt-3 fs-5">
              South India's trusted preschool chain for joyful learning,
              creativity and child development.
            </p>
          </Col>
        </Row>

        <Row className="text-center mb-5 g-4">

          <Col xs={6} md={3}>
            <h2 className="fw-bold text-warning">25+</h2>
            <p>Branches</p>
          </Col>

          <Col xs={6} md={3}>
            <h2 className="fw-bold text-warning">10k+</h2>
            <p>Happy Kids</p>
          </Col>

          <Col xs={6} md={3}>
            <h2 className="fw-bold text-warning">500+</h2>
            <p>Teachers</p>
          </Col>

          <Col xs={6} md={3}>
            <h2 className="fw-bold text-warning">15+</h2>
            <p>Awards</p>
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
              © 2026 Star Kids Preschool. Nurturing Little Minds, Building Bright Futures.
            </p>

            <p className="mb-0 mt-2">
              Maduravoyal | Valasaravakkam | Alapakkam
            </p>

            <p className="mb-0 mt-2">
              📞{" "}
              <a href="tel:+919876543210" className="footer-link">
                +91 98765 43210
              </a>{" "}
              | ✉️{" "}
              <a href="mailto:info@starkids.com" className="footer-link">
                info@starkids.com
              </a>
            </p>
          </Col>
        </Row>

      </Container>
    </footer>
  );
}

export default Footer;