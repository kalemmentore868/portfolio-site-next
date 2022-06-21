import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -100;
`;

export const Box = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const waterRipple = keyframes`
    0%{
        width: 0px;
        height: 0px;
    }
    50%{
        opacity:1;
    }
    100%{
        width: 400px;
        height: 400px;
        opacity:0;
    }
`;

export const Span = styled.span`
  position: absolute;
  box-sizing: border-box;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: ${waterRipple} 5s linear infinite;
  z-index: -100;
`;
