import React, { useState } from "react";
import { useEffect } from "react";
import "../App.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Style/Home.css";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import Particles from 'react-tsparticles';


import slide2 from "../assets/vanilla_tower2.png";
import slide3 from "../assets/chocolate_aesthetic_donuts-removebg-preview.png";
import sprinkleImage from "../assets/pngwing.com (1).png";
import "../Style/ImageSlider.css";
import ParticlesComponent from "./DynamicBG";


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

      <Row className="text-row" style={{textAlign: "center"}}>
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

      </Row>

      <Row style={{marginBottom:"10rem"}}>  

        <Col className="swiper-container-wrapper">
          <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={false}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide className="slider-image">
            <img src={slide2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="slider-image">
            <img src={slide3} alt="slide_image" />
          </SwiperSlide>
          

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow" style={{ color: '#422824' }}>
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow" style={{ color: '#422824' }}>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </Col>
      </Row>
      <ParticlesComponent/>
      
    </Container>

  );
}
