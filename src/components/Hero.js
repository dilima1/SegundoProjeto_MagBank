import React from "react";
import { Container, Button, Image } from "react-bootstrap";
import logo from "../assets/logo__magic-pay.png";

const Hero = () => (
  <Container className="text-center">
      <Image src={logo} />
    <p>Pague suas contas pelo nosso APP</p>
    <Button variant="outline-light">Abra sua conta</Button>
  </Container>
);

export default Hero;
