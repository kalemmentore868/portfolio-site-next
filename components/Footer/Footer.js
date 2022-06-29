import React from "react";
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:1-868-278-0498">1-868-278-0498</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:kalemmalek123@gmail.com">
            kalemmalek123@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Improve by 1% every day</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons
            target="_blank"
            href="https://github.com/kalemmentore868"
          >
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            target="_blank"
            href="https://www.linkedin.com/in/kalem-mentore-6319b121a/"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons
            target="_blank"
            href="https://twitter.com/KalemMentore"
          >
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
