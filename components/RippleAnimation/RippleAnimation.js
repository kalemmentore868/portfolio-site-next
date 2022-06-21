import React from "react";
import { Box, Span } from "./RippleStyles";

const RippleAnimation = () => {
  return (
    <Box>
      <Span style={{ animationDelay: "0.1s" }}>W</Span>
      <Span style={{ animationDelay: "0.2s" }}>E</Span>
      <Span style={{ animationDelay: "0.3s" }}>L</Span>
      <Span style={{ animationDelay: "0.4s" }}>C</Span>
      <Span style={{ animationDelay: "0.5s" }}>O</Span>
      <Span style={{ animationDelay: "0.6s" }}>M</Span>
      <Span style={{ animationDelay: "0.7s" }}>E</Span>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <Span style={{ animationDelay: "0.8s" }}>T</Span>
      <Span style={{ animationDelay: "0.9s" }}>O</Span>
    </Box>
  );
};

export default RippleAnimation;
