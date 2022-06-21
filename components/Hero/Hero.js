import React from "react";
import Link from "next/link";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

import RippleAnimation from "../RippleAnimation/RippleAnimation";

import { LeftSection, ContactLink, MatrixBackground } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <RippleAnimation />
        <SectionTitle main center>
          My Portfolio Website
        </SectionTitle>
        <SectionText>
          My name is Kalem Mentore. A Fullstack developer based in Trinidad and
          Tobago.
        </SectionText>
        <Link href="#contact">
          <ContactLink>More Info</ContactLink>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
