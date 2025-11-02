import React from 'react'

const Hero = () => {
  return (
    <>
      <section className="wanted-section">
        <div className="wanted-background">
          <div className="left-part"></div>
          <div className="mid-part">
            <div className="wanted-text">
              <span>W</span>
              <span>A</span>
              <span>N</span>
              <span>T</span>
              <span>E</span>
              <span>D</span>
            </div>
          </div>
          <div className="right-part"></div>
        </div>
        <div className="dead-or-alive-text">DEAD OR ALIVE</div>
        <div className="dead-or-alive-text name-text">PIRO KOBULADZE</div>
      </section>

      <div className="image-section">
        <img src="/image1.png" alt="Piro Kobuladze" />
      </div>

      <div className="dead-or-alive-text number-text">$1,000,000</div>
      <div className="dead-or-alive-text reward-text">REWARD OF CASH</div>

      <div className="header-line"></div>
    </>
  )
}

export default Hero

