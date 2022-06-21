import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
`;

export const scrollAnimation = keyframes`
  0%,
  100% {
    filter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(360deg);
  }
`;

export const Progressbar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 10px;
  height: 100%;
  background: linear-gradient(to top, #008aff, #00ffe7);
  animation: ${scrollAnimation} 5s linear infinite;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #008aff, #00ffe7);
    filter: blur(10px);
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #008aff, #00ffe7);
    filter: blur(30px);
  }
`;

export const ScrollPath = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 10px;
  height: 100%;
  background: rgba(255, 255, 255, 0.05);
`;
