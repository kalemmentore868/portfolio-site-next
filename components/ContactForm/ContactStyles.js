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

  /* min-height: 80vh; */
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
  border: 1px solid rgba(128, 128, 128, 0.199);
  margin-top: 5px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 5px;
  font-size: 18px;
  border: 1px solid rgba(128, 128, 128, 0.199);
  margin-top: 5px;
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
  transition: 0.3s ease background-color;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
