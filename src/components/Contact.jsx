import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-banner">
        <div className="decorative-line-thick"></div>
        <h3>☎ ESTABLISH CORRESPONDENCE ☎</h3>
        <div className="decorative-line-thick"></div>
      </div>
      
      <div className="contact-grid">
        <div className="contact-item">
          <div className="contact-icon">✉</div>
          <h4>Telegraph Post</h4>
          <p>developer@chronicle.dev</p>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">⚓</div>
          <h4>GitHub Repository</h4>
          <p>github.com/yourhandle</p>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">⚡</div>
          <h4>LinkedIn Network</h4>
          <p>linkedin.com/in/yourprofile</p>
        </div>
        
        <Link to="/projects" className="contact-item portfolio-archive-btn">
          <div className="contact-icon">🌐</div>
          <h4>Portfolio Archive</h4>
          <p>View Projects Collection</p>
        </Link>
      </div>
    </section>
  )
}

export default Contact

