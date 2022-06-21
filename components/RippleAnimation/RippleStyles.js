import styled, { keyframes } from "styled-components";

export const rippleAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  20% {
    transform: translateY(-10px);
  }
  40%,
  100% {
    transform: translateY(0px);
  }
`;

export const Box = styled.div`
  position: relative;
  -webkit-box-reflect: below -12px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
`;

export const Span = styled.span`
  position: relative;
  display: inline-block;
  color: #fff;
  animation: ${rippleAnimation} 1s ease-in-out infinite;
  font-size: 5vw;
  line-height: 40px;
  font-weight: 300;
  margin-top: 16px;
  max-width: 800px;
`;
