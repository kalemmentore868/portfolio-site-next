import React from "react";

import {
  GridContainer,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import ProjectCard from "./ProjectCard";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          // <BlogCard key={i}>
          //   <Img src={p.image} />
          //   <TitleContent>
          //     <HeaderThree title>{p.title}</HeaderThree>
          //     <Hr />
          //   </TitleContent>
          //   <CardInfo className="card-info">{p.description}</CardInfo>
          //   <div>
          //     <br />
          //     <TitleContent>Stack</TitleContent>
          //     <TagList>
          //       {p.tags.map((t, i) => {
          //         return <Tag key={i}>{t}</Tag>;
          //       })}
          //     </TagList>
          //   </div>
          //   <UtilityList>
          //     <ExternalLinks target="_blank" href={p.visit}>
          //       Code
          //     </ExternalLinks>
          //     <ExternalLinks target="_blank" href={p.source}>
          //       Source
          //     </ExternalLinks>
          //   </UtilityList>
          // </BlogCard>
          <ProjectCard projectObj={p} key={i}/>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
