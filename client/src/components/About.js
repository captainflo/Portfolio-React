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
              Hi, I'm Florian — a Full Stack Developer with over 8 years of experience building fast, reliable, and scalable web applications. I've had the chance to lead talented development teams and deliver complex projects on time for companies like Sandals Beaches, PriceSmart, and Brightcove.

I enjoy working with modern tools like React, Next.js, Contentful, Strapi, GraphQL, Go, Python, and Node.js, and I’m especially passionate about creating clean user experiences, integrating CMS platforms, and building systems that scale. I care about the details — from performance optimization to architecture — and always aim to deliver high-quality results.
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
