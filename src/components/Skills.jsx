import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: '⚡ Frontend Mastery',
      skills: [
        'HTML5 & CSS3',
        'JavaScript (ES6+)',
        'React.js & Vue.js',
        'Responsive Design',
        'Tailwind CSS'
      ]
    },
    {
      title: '⚙️ Backend Powers',
      skills: [
        'Node.js & Express',
        'PHP & Laravel',
        'RESTful APIs',
        'Database Design',
        'Wordpress plugins and theme Dev'
      ]
    },
    {
      title: '🛠️ Tools & Methods',
      skills: [
        'Git & GitHub',
        'Docker',
        'Agile/Scrum'
      ]
    }
  ]

  return (
    <article className="news-article skills-article">
      <div className="article-header">
        <div className="decorative-line"></div>
        <h3 className="article-title">ARSENAL OF EXPERTISE</h3>
        <div className="byline">Technical Mastery Documented</div>
        <div className="decorative-line"></div>
      </div>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h4>{category.title}</h4>
            <ul>
              {category.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  )
}

export default Skills

