import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 0px 20px #00000010;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 20px;

`;
export const FormBox = styled.div`
  width: 100%;
  margin-top: 20px;
  font-size: 20px;
  color: black;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  font-size: 18px;
  border: ${(props) => props.error ? '3px solid #d9534f' : '2px solid #292b2c'};
  margin-top: 5px;
  border-radius: 10px;

  &:focus{
   border: 3px solid #0275d8;
   outline:none;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 5px;
  font-size: 18px;
   border: ${(props) => props.error ? '3px solid #d9534f' : '2px solid #292b2c'};
  margin-top: 5px;
  border-radius: 10px;

  &:focus{
   border: 3px solid #0275d8;
   outline:none;
  }
`;
export const Button = styled.button`
  width: 100%;
  border: none;
  outline: none;
  padding: 20px;
  font-size: 24px;
  border-radius: 8px;
  font-family: "Montserrat";
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  color: white;
  background-color: ${(props) => props.hasSubmitted ? "#84CC16" : "#0275d8" };

  
`;

export const Status = styled.span`
  color: #d9534f;
  font-size: 15px;
`
