import React from 'react';
import './About.css';
import ScrollAnimation from 'react-animate-on-scroll';

function About() {
  return (
    <div className="about">
      <div className="row">
        <ScrollAnimation
          animateIn="slideInLeft"
          duration="2"
          animateOnce={true}
        >
          <div className="col m6 about-text">
            <h2>About Me</h2>
            <p>
              Hi, I'm Florian, I am a web developer with more than two years of
              experience, passionate about programming, and continually
              evaluating and upgrading my skills. I work hard to stay at the
              cutting edge of web development, and to improve the core
              functionalities of my work. I enjoy bringing innovative ideas to
              life.
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="slideInRight"
          duration="2"
          animateOnce={true}
        >
          <div className="about-image">
            <img
              src={process.env.PUBLIC_URL + '/images/aboutMe.png'}
              alt="mee"
            />
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default About;
