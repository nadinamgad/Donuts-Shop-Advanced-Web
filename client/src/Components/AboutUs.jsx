import donut from "../assets/powdered sugar donuts.png";
import upimg from "../assets/pxfuel.jpg";
import donut1 from "../assets/pngwing.com (4).png";
import "../Style/AboutUs.css"
import { Container, Row, Col, Button } from "react-bootstrap";

export default function AboutUs() {
  return (
<Container className="about-container">
    <Row className="upper-half">
        <Col className="hook">
            <h1 className="about-us">
                ABOUT US !<br/>
            </h1>
            <div className="sub-hook">
                We Serve Your One-Stop Donut Destination!
            </div>
        </Col>

      <Col>
        <img src={donut1} className="side-img"/>
      </Col>
      
    </Row>

    <Row className="lower-half">
        <Col className="lower-col1">
            <div className="text-container">

            <h1 className="madeforu">
                MADE FOR YOU
            </h1>
            <h1 className="wlove">
                with love
            </h1>

            </div>
        </Col>

        <Col>
        <p className="aboutus-p">Welcome to Donutopia! We are a family-owned donut shop dedicated to serving the finest quality donuts in town. And we take pride in offering a wide variety of flavors and styles to satisfy every donut lover's cravings.</p>
        </Col>
    </Row>
    </Container>

);
}

{/* <Col className="logo">
<img src={donut} alt="Delicious Donuts Logo" className="donutimg"/>
</Col>
<Col className="sub-cont">
<div className="about-us-title">

<h1 className="neonText">About Us </h1>
</div>
<p>Welcome to Delicious Donuts! We are a family-owned donut shop dedicated to serving the finest quality donuts in town. Our passion for crafting delicious pastries has been passed down through generations, and we take pride in offering a wide variety of flavors and styles to satisfy every donut lover's cravings.</p>
<p>At Delicious Donuts, we believe that the secret to a perfect donut lies in the ingredients. That's why we use only the freshest, high-quality ingredients sourced locally whenever possible. Our talented bakers work tirelessly to create each donut from scratch, ensuring that every bite is a heavenly experience.</p>
<p>Visit us today and indulge in the irresistible flavors of our donuts. We look forward to serving you and becoming your go-to destination for delectable treats.</p>
<div className="social-links">
<a className="social-link" href="https://www.facebook.com/deliciousdonuts">Facebook</a>
<a className="social-link" href="https://www.instagram.com/deliciousdonuts">Instagram</a>
</div>

</Col> */}