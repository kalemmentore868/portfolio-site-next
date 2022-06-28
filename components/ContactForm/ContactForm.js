import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios"

import {
  Section,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  Container,
  Button,
  FormBox,
  Input,
  Status,
  Textarea,
} from "./ContactStyles";

const ContactForm = () => {


  const {register, handleSubmit, formState: { errors }, reset} = useForm()
  async function onSubmitForm(values){
    let config = {
      method: "post",
      url: `/api/contact`,
      headers:{
        'Content-Type': 'application/json'
      },
      data: values
    }

    try {
      const response = await axios(config);
      if(response.status == 200){
        reset()
      }
    } catch (err) {
      console.error(err)
    }
    
  }

  return (
    <Section id="contact">
      <SectionTitle style={{ margin: "0 auto 30px auto" }}>
        Leave Me a Message!
      </SectionTitle>
      <Container>
        <form
          action=""
          method="POST"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <FormBox>
            <label htmlFor="firstName">First Name</label>
            <Input {...register("firstname", {
            required: "first name is required**",
          })} type="text" id="firstname" name="firstname" />
          <Status>{errors.firstname?.message}</Status>
          </FormBox>

          <FormBox>
            <label htmlFor="lastName">Last Name</label>
            <Input {...register("lastname", {
            required: "last name is required**",
          })} type="text" id="lastname" name="lastname"  />
           <Status>{errors.lastname?.message}</Status>
          </FormBox>

          <FormBox>
            <label htmlFor="email">Email</label>
            <Input {...register("email", {
            required: "email is required**",
          })} type="email" id="email" name="email" />

        <Status>{errors.email?.message}</Status>
          </FormBox>

          <FormBox>
            <label htmlFor="phone">Phone</label>
            <Input {...register("phone", {
            required: false,
          })} type="text" id="phone" name="phone" />
          </FormBox>

          <FormBox>
            <label htmlFor="message">Message</label>
            <Textarea
              id="message"
              name="message"
              cols="30"
              rows="10"
              placeholder="Please leave a message"
              {...register("message", {
                required: "message is required**",
              })}
            />
          <Status>{errors.message?.message}</Status>
          </FormBox>

          <Button type="submit" >
            Submit
          </Button>
        </form>
      </Container>
    </Section>
   
  );
};

export default ContactForm;
