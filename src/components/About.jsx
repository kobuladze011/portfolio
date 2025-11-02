import React from 'react'

const About = () => {
  return (
    <article className="news-article">
      <div className="article-header">
        <div className="decorative-line"></div>
        <h3 className="article-title">THE CHRONICLE OF A DEVELOPER</h3>
        <div className="byline">By Editorial Staff • Portfolio Edition</div>
        <div className="decorative-line"></div>
      </div>
      
      <div className="article-content">
        <p className="drop-cap">
          In an era where digital craftsmanship defines success, few developers command as much respect and admiration as our featured artisan. Born into the age of innovation, this master of code has been intricately linked with the web from a young age.
        </p>
        
        <p>
          With a passion for creating elegant solutions to complex problems, this developer has dedicated years to mastering the art of web development. From crafting pixel-perfect interfaces to architecting robust backend systems, every project tells a story of dedication and excellence.
        </p>
        
        <p>
          <strong>Philosophy:</strong> "Write code that speaks for itself, design experiences that resonate with users, and always strive for excellence in every line written."
        </p>
      </div>
    </article>
  )
}

export default About

