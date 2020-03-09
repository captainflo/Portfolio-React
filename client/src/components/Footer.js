import React from 'react';
import './footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container">
            © 2019 Copyright by Florian Lahitte
            <a
              className="grey-text text-lighten-4 right"
              href="https://github.com/captainflo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square"></i> Github
            </a>
            <a
              className="grey-text text-lighten-4 right"
              href="https://www.linkedin.com/in/florianlahitte/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i> Linkedin
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
