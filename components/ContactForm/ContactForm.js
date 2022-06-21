import React from "react";

import {
  Section,
  SectionTitle,
  SectionText,
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
  // const [state, handleSubmit] = useForm("mayvedag");
  // if (state.succeeded) {
  //   return (
  //     <Section style={{ margin: "30px 0" }}>
  //       <SectionTitle style={{ margin: "0 auto 30px auto" }}>
  //         Thanks For Submitting!
  //       </SectionTitle>

  //       <SectionText style={{ margin: "0 auto 30px auto" }}>
  //         Look out for an email response from me within the next 72 hours.
  //       </SectionText>
  //     </Section>
  //   );
  // }

  return (
    // <Section id="contact">
    //   <SectionTitle style={{ margin: "0 auto 30px auto" }}>
    //     Leave Me a Message!
    //   </SectionTitle>
    //   <Container>
    //     <form
    //       action="https://formspree.io/f/mayvedag"
    //       method="POST"
    //       onSubmit={handleSubmit}
    //     >
    //       <FormBox>
    //         <label for="firstName">First Name</label>
    //         <Input type="text" id="firstname" name="firstname" required />
    //         <ValidationError
    //           prefix="First-Name"
    //           field="firstName"
    //           errors={state.errors}
    //         />
    //       </FormBox>

    //       <FormBox>
    //         <label for="lastName">Last Name</label>
    //         <Input type="text" id="lastname" name="firstname" required />
    //         <ValidationError
    //           prefix="Last-Name"
    //           field="lastname"
    //           errors={state.errors}
    //         />
    //       </FormBox>

    //       <FormBox>
    //         <label for="email">Email</label>
    //         <Input type="email" id="email" name="email" required />

    //         <ValidationError
    //           prefix="Email"
    //           field="email"
    //           errors={state.errors}
    //         />
    //       </FormBox>

    //       <FormBox>
    //         <label for="message">Message</label>
    //         <Textarea
    //           id="message"
    //           name="message"
    //           cols="30"
    //           required
    //           rows="10"
    //           placeholder="Please leave a message"
    //         />
    //         <ValidationError
    //           prefix="Message"
    //           field="Message"
    //           errors={state.errors}
    //         />
    //       </FormBox>

    //       <Button type="submit" disabled={state.submitting}>
    //         Submit
    //       </Button>
    //     </form>
    //   </Container>
    // </Section>
    <h1>YEA</h1>
  );
};

export default ContactForm;
