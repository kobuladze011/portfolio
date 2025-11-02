import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="image-overlay">
          <span>View Project</span>
        </div>
      </div>
      <div className="project-header">
        <div className="project-number">№ {project.number}</div>
        <h3 className="project-title">{project.title}</h3>
        <div className="project-subtitle">{project.subtitle}</div>
      </div>
      <div className="project-content">
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.liveLink} className="project-link">View Live ⚡</a>
          <a href={project.codeLink} className="project-link">Source Code ⚓</a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard

