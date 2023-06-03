import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/donut shop logo transparent.png";
import navIcon1 from "../assets/facebook.png";
import navIcon2 from "../assets/instagram50.png";
import navIcon3 from "../assets/email-50.png";
import "../Style/Footer.css"

export const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ background: "rgba(255, 255, 255, 0.3)" }}
    >
      <Container>
        <Row className="align-items-center">
          <Col className="text-center text-sm-center">
            {/* <img src={logo} alt="Logo" style={{ width: '10rem', height: 'auto' }}/> */}
            <div>
              <h1> Donatopia </h1>
            </div>
          </Col>
          <Col className="text-center text-sm-center">
            <div className="footer-items">
              <div
                className="social-icon"
                
              >
              <p>Follow us !</p>

                <a href="#" style={{ marginRight: "10px" }}>
                  <img src={navIcon1} alt="Icon" />
                </a>
                <a href="#" style={{ marginRight: "10px" }}>
                  <img src={navIcon2} alt="Icon" />
                </a>
                <a href="#" style={{ marginRight: "10px" }}>
                  <img src={navIcon3} alt="Icon" />
                </a>
              </div>
            </div>
          </Col>

          <Col style={{paddingTop: '2rem'}}>
                <p style={{textAlign: "center"}}>Call us</p>
                <p style={{textAlign: "center"}}> 07775000</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <p style={{ textAlign: "center" }}>
            Copyright 2023. All Rights Reserved
          </p>
        </Row>
      </Container>
    </footer>
  );
};
