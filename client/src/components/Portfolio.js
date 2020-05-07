import React from 'react';
import { Link } from 'react-router-dom';
import './portfolio.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import ScrollAnimation from 'react-animate-on-scroll';

class Portfolio extends React.Component {
  componentDidMount() {
    // Collapsible
    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {});
  }
  state = {
    portfolio: [
      {
        id: '23',
        title: 'SOUND GRAB',
        image: '/images/portfolio/SoundGrab/soundgrab01.png',
      },
      {
        id: '22',
        title: 'WIKI GANE',
        image: '/images/portfolio/Game/wikiGame.png',
      },
      {
        id: '21',
        title: 'WIKI NETWORK',
        image: '/images/portfolio/Wikinetwork/home.png',
      },
      {
        id: '20',
        title: 'WIKI SPORT',
        image: '/images/portfolio/ReactSport/sport.png',
      },
      {
        id: '3',
        title: 'MOVIE REACT',
        image: '/images/portfolio/Movie/floweb-movie.png',
      },
      {
        id: '4',
        title: 'RENT VEHICLES REACT',
        image: '/images/portfolio/RentVehicleReact/vehicle.png',
      },
      {
        id: '5',
        title: 'SALON L’ESSENTIEL',
        image: '/images/portfolio/SalonEssentiel2/floweb-salon01.png',
      },
      {
        id: '19',
        title: 'OWLZ V2',
        image: '/images/portfolio/OwlzV2/owlzv2.png',
      },
      {
        id: '1',
        title: 'TRACKAPP REACT NATIVE',
        image: '/images/portfolio/TrackApp/trackApp.png',
      },
      {
        id: '2',
        title: 'REACT NATIVE FOOD',
        image: '/images/portfolio/ReactNativeFood/food.png',
      },
      {
        id: '7',
        title: 'EMAILY',
        image: '/images/portfolio/Emaily/home.png',
      },
      {
        id: '8',
        title: 'OWLZ',
        image: '/images/portfolio/Owlz/owlzHome.png',
      },
      {
        id: '9',
        title: 'BEERVILLE',
        image: '/images/portfolio/BeerVille/beerville.png',
      },
      {
        id: '6',
        title: 'REACT WITH API YOUTUBE',
        image: '/images/portfolio/ReactYoutube/react-youtube.png',
      },
      {
        id: '10',
        title: 'MONGO SCRAPPER',
        image: '/images/portfolio/Mongo/home.png',
      },
      {
        id: '11',
        title: 'FLIGHT BOOKING',
        image: '/images/portfolio/Interview/floweb-mundo.png',
      },
      {
        id: '12',
        title: 'INTERVIEW CHALLENGE',
        image: '/images/portfolio/InterviewChallenge/home.png',
      },
      {
        id: '13',
        title: 'MIKE COACH',
        image: '/images/portfolio/Old/Mike/florianlahitte-mike.jpg',
      },
      {
        id: '14',
        title: 'SHARE GOSSE',
        image: '/images/portfolio/Old/ShareGosse/home.png',
      },
      {
        id: '15',
        title: 'LES ONGLES DE MYLENE',
        image: '/images/portfolio/Old/Mimi/floweb-mylene.png',
      },
      {
        id: '16',
        title: 'SALON LESSENTIEL V1',
        image: '/images/portfolio/Old/Salon/home.png',
      },
      {
        id: '17',
        title: 'SUNDAY',
        image: '/images/portfolio/Old/Sun/home.png',
      },
      {
        id: '18',
        title: 'HOPEN FAMILY',
        image: '/images/portfolio/Old/Hopen/01.png',
      },
    ],
  };

  renderBoxPortfolio = (portfolios) => {
    return portfolios.map((portfolio) => {
      if (
        portfolio.id !== '13' &&
        portfolio.id !== '14' &&
        portfolio.id !== '15' &&
        portfolio.id !== '16' &&
        portfolio.id !== '17' &&
        portfolio.id !== '18'
      ) {
        return (
          <Link to={`/portfolio/${portfolio.id}`} key={portfolio.title}>
            <div className="col m6 s12">
              <div
                className="box-container"
                style={{ backgroundImage: `url(${portfolio.image})` }}
              >
                <div className="box-title">
                  <p>{portfolio.title}</p>
                </div>
              </div>
            </div>
          </Link>
        );
      } else {
        return null;
      }
    });
  };

  renderOldBoxPortfolio = (portfolios) => {
    return portfolios.map((portfolio) => {
      if (
        portfolio.id === '13' ||
        portfolio.id === '14' ||
        portfolio.id === '15' ||
        portfolio.id === '16' ||
        portfolio.id === '17' ||
        portfolio.id === '18'
      ) {
        return (
          <Link to={`/portfolio/${portfolio.id}`} key={portfolio.title}>
            <div className="col m6 s12">
              <div
                className="box-container"
                style={{ backgroundImage: `url(${portfolio.image})` }}
              >
                <div className="box-title">
                  <p>{portfolio.title}</p>
                </div>
              </div>
            </div>
          </Link>
        );
      } else {
        return null;
      }
    });
  };

  render() {
    const { portfolio } = this.state;
    return (
      <div className="container center portfolio">
        <ScrollAnimation
          animateIn="slideInDown"
          duration="2"
          animateOnce={true}
        >
          <h2>Portfolio</h2>
          <hr></hr>
          <p style={{ marginBottom: '40px' }}>
            This is my most recent Project bellow
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn" duration="2" animateOnce={true}>
          <div className="row">{this.renderBoxPortfolio(portfolio)}</div>
        </ScrollAnimation>
        <div className="row">
          <ul className="collapsible">
            <li>
              <div className="collapsible-header">
                {' '}
                <p style={{ color: '#039be5' }}>
                  <i className="far fa-folder-open"></i> Old Project
                </p>
              </div>
              <div className="collapsible-body">
                {this.renderOldBoxPortfolio(portfolio)}
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Portfolio;
