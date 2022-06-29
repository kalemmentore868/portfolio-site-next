import React from 'react'




const ProjectCard2 = ({projectObj, key}) => {
  return (
    <div className="blogCard" key={key}>
     <img className='card-img' src={projectObj.image} alt="project information"/>
   <div className="title-content">
      <h3 className="header-three">{projectObj.title}</h3>
      <hr className="divider" />
    </div>
     <p className="card-info">{projectObj.description}</p>
   <div>
      <br />
      <div className="title-content">Stack</div>
      <ul className="tag-list">
        {projectObj.tags.map((t, i) => {
          return <li className="tag" key={i}>{t}</li>;
        })}
      </ul>
    </div>
   <ul className="utility-list">
      <a className="external-link" target="_blank" rel="noreferrer" href={projectObj.visit}>
        Code
      </a>
      <a className="external-link" target="_blank" rel="noreferrer" href={projectObj.source}>
        Source
      </a>
    </ul> 
  </div>
  )
}

export default ProjectCard2