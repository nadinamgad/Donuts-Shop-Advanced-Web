import React, { useState } from "react";
import "../App.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Style/Home.css";

import slide2 from "../assets/vanilla_tower2.png";
import slide3 from "../assets/chocolate_aesthetic_donuts-removebg-preview.png";
import "../Style/ImageSlider.css";

export default function Home() {
  const [index, setIndex] = useState(0);
  const images = [slide3, slide2];

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previous = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Container className="app__header__wrapper_info_text">
      {/* <Row>
        <Col>
          <h1 className="main-text">Vanilla</h1>
        </Col>
      </Row> */}

      <Row className="text-row">
        <Col>
          <h1>
            <span className="el_tetr" id="gradient-text">
              Donut store,
            </span>
          </h1>
          <h1>
            <span className="sub-el-tetr" id="gradient-text2">
              like never before
            </span>
          </h1>
        </Col>

        <Col xs="auto">
          <button onClick={previous} className="sliders-button">
            Previous
          </button>
        </Col>

        <Col>
          <div className="slider">
            <div className="slideshow">
              <img src={images[index]} className="mainimg" alt="slide" />
            </div>
          </div>
        </Col>

        <Col xs="auto">
          <button onClick={next} className="sliders-button">
            Next
          </button>
        </Col>
      </Row>

      <Row>
        <Col className="button-col">
          <Button className="order-now">Order Now</Button>
        </Col>
      </Row>
    </Container>
  );
}
