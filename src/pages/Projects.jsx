import React from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { projectsData } from '../data/projectsData'

const Projects = () => {
  return (
    <div className="container projects-page">
      <div className="projects-page-header">
        <Link to="/" className="back-button">← Back to Home</Link>
        <div className="decorative-line"></div>
        <h1 className="projects-page-title">⚔ PROJECT ARCHIVE ⚔</h1>
        <div className="projects-page-subtitle">Chronicles of Digital Craftsmanship</div>
        <div className="decorative-line"></div>
      </div>
      
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      <footer className="newspaper-footer">
        <div className="footer-decoration">
          <span>✦</span>
          <span>◆</span>
          <span>✦</span>
        </div>
        <p>Published Daily • The Developer Chronicle • Est. 2024</p>
        <p className="footer-tagline">"Crafting Digital Excellence Since the Dawn of Code"</p>
        <div className="footer-decoration">
          <span>✦</span>
          <span>◆</span>
          <span>✦</span>
        </div>
      </footer>
    </div>
  )
}

export default Projects

