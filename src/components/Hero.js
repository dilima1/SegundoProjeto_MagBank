import React from "react";
import { Row, Col, Container, Button, Image } from "react-bootstrap";
import logo from "../assets/logo__magic-pay.png";

const Hero = () => (
  <Container className="text-center">
    <Row className="my-lg-5">
      <Col lg className="my-lg-5">
        <Image src={logo} />
      </Col>
      <Col className="text-lg-left my-lg-5">
        <p>Pague suas contas pelo nosso APP</p>
        <Button variant="outline-light">Abra sua conta</Button>
      </Col>
    </Row>
  </Container>
);

export default Hero;
