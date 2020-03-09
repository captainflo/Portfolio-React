import React from 'react';
import './skill.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import ScrollAnimation from 'react-animate-on-scroll';

class Skill extends React.Component {
  componentDidMount() {
    var elem = document.querySelectorAll('.carousel');
    M.Carousel.init(elem, { padding: 200 });
  }
  render() {
    return (
      <div className="skill-container">
        <div className="container">
          <ScrollAnimation
            animateIn="slideInDown"
            duration="2"
            animateOnce={true}
          >
            <h2 className="center">Skill</h2>
            <hr></hr>
            <p style={{ marginBottom: 60 }} className="center">
              I have a full Stack experience Back-end, Front-End, Database...
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="slideInRight"
            duration="2"
            animateOnce={true}
          >
            <h5>
              <i className="fas fa-code"></i> Language & Framework & Library
            </h5>
            <div className="carousel">
              <p className="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + '/images/react.png'}
                  alt="react"
                />
              </p>
              <p className="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + '/images/redux.png'}
                  alt="redux"
                />
              </p>
              <p className="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + '/images/node.png'}
                  alt="node"
                />
              </p>
              <p className="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + '/images/ExpressJS.png'}
                  alt="ExpressJS"
                />
              </p>
              <p className="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + '/images/html.png'}
                  alt="html"
                />
              </p>
              <p className="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + '/images/axios.png'}
                  alt="axios"
                />
              </p>
              <p className="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + '/images/Jquery.png'}
                  alt="Jquery"
                />
              </p>
              <p className="carousel-item" href="#five!">
                <img
                  src={process.env.PUBLIC_URL + '/images/moongoose.png'}
                  alt="moongoose"
                />
              </p>
              <p className="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + '/images/sequelize.png'}
                  alt="sequelize"
                />
              </p>
              <p className="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + '/images/passport.png'}
                  alt="passport"
                />
              </p>
              <p className="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + '/images/jwt.png'}
                  alt="jwt"
                />
              </p>
              <p className="carousel-item">
                <img
                  src={
                    process.env.PUBLIC_URL + '/images/google-authenticator.png'
                  }
                  alt="google-authenticator"
                />
              </p>
              <p className="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + '/images/semantic-ui.png'}
                  alt="semantic-ui"
                />
              </p>
              <p className="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + '/images/bootstrap.png'}
                  alt="bootstrap"
                />
              </p>
              <p className="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + '/images/materialize.png'}
                  alt="materialize"
                />
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="slideInLeft"
            duration="2"
            animateOnce={true}
          >
            <h5>
              <i className="fas fa-database"></i> Database
            </h5>
            <div className="carousel">
              <p className="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + '/images/mysql.png'}
                  alt="mysql"
                />
              </p>
              <p className="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + '/images/mongodb-logo.png'}
                  alt="mongodb-logo"
                />
              </p>
              <p className="carousel-item" href="#four!">
                <img
                  src={process.env.PUBLIC_URL + '/images/squilte.png'}
                  alt="squilte"
                />
              </p>
              <p className="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + '/images/Firebase.png'}
                  alt="Firebase"
                />
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="slideInLeft"
            duration="2"
            animateOnce={true}
          >
            <h5>
              <i className="fas fa-server"></i> Operating System
            </h5>
            <div className="carousel">
              <p className="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + '/images/github.png'}
                  alt="github"
                />
              </p>
              <p className="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + '/images/heroku.png'}
                  alt="heroku"
                />
              </p>
              <p className="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + '/images/apache.png'}
                  alt="apache"
                />
              </p>
              <p className="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + '/images/debian.png'}
                  alt="debian"
                />
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}

export default Skill;
