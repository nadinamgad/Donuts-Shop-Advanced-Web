import React, { useState } from "react";
// import slide1 from "./Slide1.png"; // Assuming this is an image
import slide2 from "../assets/nardeena.png";
import slide3 from "../assets/chocolate_aesthetic_donuts-removebg-preview.png";

export default function Imageslider() {
  const [index, setIndex] = useState(0);
  const images = [slide2, slide3];

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previous = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <h1>Slideshow</h1>
      <div className="slideshow">
        <img src={images[index]} className="mainimg" alt="slide" />
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}
