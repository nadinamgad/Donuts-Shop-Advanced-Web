import React from "react";
import "../App.css";
import Imageslider from "./ImageSlider";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Style/Home.css";

export default function Home() {
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
            <span className="el_tetr" id="gradient-text">Donut store,</span>
          </h1>
          <h1>
            <span className="sub-el-tetr" id="gradient-text2">like never before</span>
          </h1>
        </Col>
      </Row>
      
      <Row>
        <Col className="button-col">
          <Button className="order-now">
            Order Now
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Imageslider />
        </Col>
      </Row>
    </Container>
  );
}
