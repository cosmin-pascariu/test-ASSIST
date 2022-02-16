import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 100%;
  margin-left: 230px;
  width: calc(100% - 230px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormTitle = styled.h1`
  font-size: 40px;
  color: #fff;
`;

export const ContactForm = styled.form`
  height: 60%;
  width: 40%;
  border-radius: 5px;
  background-color: #345abc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const Input = styled.input`
  width: 60%;
  background-color: #fff;
  height: 30px;
  border-radius: 10px;
  outline: none;
  background-color: none;
  margin: 15px;
  padding-left: 8px;
`;

export const InputBtn = styled.input`
  height: 30px;
  width: 100px;
  background-color: #32a4ff;
  border-radius: 10px;
`;
