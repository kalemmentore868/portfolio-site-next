import styled, { keyframes } from "styled-components";

export const MatrixBackground = styled.div`
  background: url("/matrix-background.webp");
  background-size: 100vw;
`;

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const hoverButton = keyframes`
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 400%;
  }
`;

export const ContactLink = styled.a`
 text-align: center;
 line-height: 60px;
 color: #fff;
 font-size: 24px;
 text-transform: uppercase;
 text-decoration: none;
 box-sizing: border-box;
 padding: 5px 20px;
 display: inline-block;
 border: 2px solid white;;
 border-radius: 50px;
 cursor: pointer;
 transition: all 0.3s ease-in-out;

 &:hover{
  animation: : ${hoverButton} 8s linear infinite;
  background-color:  rgba(255,255,255, 0.2);
  transition: all 0.3s ease-in-out;
 }

@media (max-width: 640px){
  width: 50%;
  font-size: 20px;
  padding: 0;
  margin-bottom: 25px ;
}
`;
