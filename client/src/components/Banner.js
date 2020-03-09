import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import './banner.css';
class Banner extends React.Component {
  componentDidMount() {
    // banner slider
    var elems = document.querySelectorAll('.slider');
    M.Slider.init(elems, { indicators: false, height: 400 });
  }
  render() {
    return (
      <div className="slider">
        <ul className="slides">
          <li>
            <img
              src={process.env.PUBLIC_URL + '/images/home.png'}
              alt="background"
            />
            <div className="caption center-align">
              <h3>Florian Lahitte</h3>
              <h5 className="light grey-text text-lighten-3">
                {' '}
                <hr></hr>
                Full Stack Web Developer
              </h5>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Banner;
