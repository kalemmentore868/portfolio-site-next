import React from "react";
import { Container, Box, Span } from "./WaterRippleStyles";

const waterRippleAnimation = () => {
  return (
    <Container>
      <Box>
        <Span style={{ animationDelay: "-0.5s" }}></Span>
        <Span style={{ animationDelay: "-1s" }}></Span>
        <Span style={{ animationDelay: "-1.5s" }}></Span>
        <Span style={{ animationDelay: "-2s" }}></Span>
        <Span style={{ animationDelay: "-2.5s" }}></Span>
        <Span style={{ animationDelay: "-3s" }}></Span>
        <Span style={{ animationDelay: "-3.5s" }}></Span>
        <Span style={{ animationDelay: "-4s" }}></Span>
        <Span style={{ animationDelay: "-4.5s" }}></Span>
      </Box>
    </Container>
  );
};

export default waterRippleAnimation;
