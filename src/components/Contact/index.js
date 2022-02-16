import React from "react";
import {
  ContactContainer,
  ContactForm,
  Input,
  InputBtn,
  FormTitle,
} from "./ContactElements";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactForm>
        <FormTitle>Contact us</FormTitle>
        <Input type="text" placeholder="Name" required></Input>
        <Input type="text" placeholder="Surname" required></Input>
        <Input type="tel" placeholder="Phone number" required></Input>
        <Input type="email" placeholder="Email" required></Input>
        <InputBtn type="submit" value="Submit" />
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
