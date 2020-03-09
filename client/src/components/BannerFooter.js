import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import './banner.css';

class BannerFooter extends React.Component {
  componentDidMount() {
    // banner slider
    var elems = document.querySelectorAll('.slider');
    M.Slider.init(elems, { indicators: false, height: 400 });
  }
  render() {
    return (
      <div className="box-footer">
        <div className="slider">
          <ul className="slides">
            <li>
              <img
                src={process.env.PUBLIC_URL + '/images/floweb-work.jpg'}
                alt="background"
              />
              <div className="caption center-align">
                <h3>Contact me</h3>
                <h5 className="light grey-text text-lighten-3">
                  <i className="fas fa-envelope"></i> lahitte.florian@gmail.com
                </h5>
                <h5 className="light grey-text text-lighten-3">786 212 3888</h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BannerFooter;
