import React from 'react'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      period: 'January 2022 - Present',
      description: 'Leading development of enterprise-scale web applications, architecting scalable solutions, and mentoring junior developers in modern web technologies and best practices.',
      responsibilities: [
        'Architected and deployed microservices handling 1M+ daily requests',
        'Reduced page load times by 60% through optimization strategies',
        'Led team of 5 developers in agile environment',
        'Implemented CI/CD pipelines reducing deployment time by 75%'
      ],
      techStack: 'React • Node.js • AWS • Docker • PostgreSQL'
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Innovations Inc.',
      period: 'March 2020 - December 2021',
      description: 'Developed and maintained multiple client-facing applications, focusing on responsive design and performance optimization across various platforms and devices.',
      responsibilities: [
        'Built 15+ responsive web applications from conception to deployment',
        'Collaborated with UX/UI team to implement pixel-perfect designs',
        'Integrated third-party APIs and payment gateways',
        'Maintained 99.9% uptime for production applications'
      ],
      techStack: 'Vue.js • Python • Django • MongoDB • Firebase'
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Studios',
      period: 'June 2018 - February 2020',
      description: 'Contributed to the development of innovative web solutions for startup clients, gaining hands-on experience with modern frameworks and agile methodologies.',
      responsibilities: [
        'Developed frontend components using React and modern CSS',
        'Participated in code reviews and sprint planning sessions',
        'Fixed bugs and implemented new features based on client feedback',
        'Wrote unit tests achieving 85% code coverage'
      ],
      techStack: 'HTML5 • CSS3 • JavaScript • React • Express'
    }
  ]

  return (
    <article className="news-article experience-article">
      <div className="article-header">
        <div className="decorative-line"></div>
        <h3 className="article-title">PROFESSIONAL CHRONICLE</h3>
        <div className="byline">Career Journey & Accomplishments</div>
        <div className="decorative-line"></div>
      </div>
      
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h4 className="job-title">{exp.title}</h4>
              <div className="company-name">{exp.company}</div>
              <div className="employment-period">{exp.period}</div>
            </div>
            <div className="experience-content">
              <p>{exp.description}</p>
              <ul className="responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
              <div className="tech-stack">{exp.techStack}</div>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

export default Experience

