import React from 'react'

import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    Tag,
    TagList,
    TitleContent,
    UtilityList,
    Img,
  } from "./ProjectsStyles";


const ProjectCard = ({projectObj}) => {
  return (
    <BlogCard>
    <Img src={projectObj.image} />
    <TitleContent>
      <HeaderThree title>{projectObj.title}</HeaderThree>
      <Hr />
    </TitleContent>
    <CardInfo className="card-info">{projectObj.description}</CardInfo>
    <div>
      <br />
      <TitleContent>Stack</TitleContent>
      <TagList>
        {projectObj.tags.map((t, i) => {
          return <Tag key={i}>{t}</Tag>;
        })}
      </TagList>
    </div>
    <UtilityList>
      <ExternalLinks target="_blank" href={projectObj.visit}>
        Code
      </ExternalLinks>
      <ExternalLinks target="_blank" href={projectObj.source}>
        Source
      </ExternalLinks>
    </UtilityList>
  </BlogCard>
  )
}

export default ProjectCard