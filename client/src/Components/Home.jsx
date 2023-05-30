import React, { useState } from "react";
import { useEffect } from "react";
import "../App.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Style/Home.css";

import slide2 from "../assets/vanilla_tower2.png";
import slide3 from "../assets/chocolate_aesthetic_donuts-removebg-preview.png";
import sprinkleImage from "../assets/pngwing.com (1).png";
import "../Style/ImageSlider.css";

export default function Home() {
  // useEffect(() => {
  //   createSprinkles();
  // }, []);

  // const createSprinkles = () => {
  //   const numSprinkles = 2; // Number of sprinkles to create

  //   for (let i = 0; i < numSprinkles; i++) {
  //     // Wrap the creation of each sprinkle in a setTimeout function
  //     setTimeout(() => {
  //       const sprinkle = document.createElement("img");
  //       sprinkle.src = sprinkleImage;
  //       sprinkle.classList.add("sprinkle");

  //       // Randomly position the sprinkle on the top of the page
  //       sprinkle.style.top = `${Math.random() * 100}vh`;
  //       sprinkle.style.left = `${Math.random() * 10}vw`;
  //       // sprinkle.style.right = `${Math.random() *50}vw`;

  //       // Randomly adjust animation duration and delay
  //       const animationDuration = Math.random() * 5 + 5; // Random duration between 3 and 8 seconds
  //       const animationDelay = Math.random() * 5; // Random delay between 0 and 3 seconds

  //       sprinkle.style.animationDuration = `${animationDuration}s`;
  //       sprinkle.style.animationDelay = `${animationDelay}s`;

  //       document.body.appendChild(sprinkle);
  //     }, i * 1000); // Multiply the index by 1000 milliseconds (1 second) to set the delay
  //   }
  // };

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
      {/* <div id="background" className="background"></div> */}
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
