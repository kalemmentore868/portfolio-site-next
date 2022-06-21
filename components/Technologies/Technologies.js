import React from "react";
import { DiFirebase, DiReact, DiMongodb } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "../Hero/HeroStyles";

import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section row nopadding id="tech">
    <LeftSection>
      <SectionDivider divider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range of technologies in the web development world.
        From Back-end and Databases To Front-end.
      </SectionText>
      <List>
        <ListItem>
          <picture>
            <DiReact size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experiece with <br />
              React.js, HTML5, CSS, JavaScript, Bootstrap, JQuery
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiFirebase size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node.js and frameworks like express and next.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiMongodb size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Databases</ListTitle>
            <ListParagraph>
              Experience with <br />
              NoSQL Databases like MongoDb as well as SQL Databases like
              PostGres
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      <SectionDivider colorAlt />
    </LeftSection>
  </Section>
);

export default Technologies;
