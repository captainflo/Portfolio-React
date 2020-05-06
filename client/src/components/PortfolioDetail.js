import React from 'react';
import './portfolio.css';
import M from 'materialize-css/dist/js/materialize.min.js';

class PortfolioDetail extends React.Component {
  componentDidMount() {
    // banner slider
    const elems = document.querySelectorAll('.slider');
    M.Slider.init(elems, { indicators: false, height: 600 });
  }

  state = {
    portfolio: [
      {
        id: '23',
        title: 'SOUND GRAB',
        image: '/images/portfolio/SoundGrab/SoundGrab01.png',
        titleDescription: 'PREMIUM STREAMING SERVICE',
        description:
          'The concept of this project was to create an apple music-style premium streaming service that allowed users to either become premium users or purchase streaming rights to their favoirte songs.',
        description2:
          'I designed and developed this website from scratch while leveraging prominent, dependable libraries.',
        description3:
          'Technologies used in this project include: React, Redux, Javascript ,Passport.js, Mongo, Mongoose, Node.js, Express.js, Stripe Api..., responsive for any device (phone, tablet, computer). Server: Heroku…',
        imagePlus: [
          '/images/portfolio/SoundGrab/SoundGrab02.png',
          '/images/portfolio/SoundGrab/SoundGrab03.png',
          '/images/portfolio/SoundGrab/SoundGrab04.png',
          '/images/portfolio/SoundGrab/SoundGrab05.png',
          '/images/portfolio/SoundGrab/SoundGrab06.png',
        ],
        link: 'https://soundgrab.herokuapp.com/',
        git: 'https://github.com/captainflo/GrabSound',
      },
      {
        id: '22',
        title: 'WIKI GAME',
        image: '/images/portfolio/Game/wikiGame.png',
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT',
        description:
          'Application base on one Api (RAWG Video Games) you can have all details of video game by series, platforms, video, description, simular game, date release...',
        description2:
          'I designed and developed this website from scratch while leveraging prominent, dependable libraries.',
        description3:
          'Technologies used in this project include: React, Redux, Javascript ,Passport.js, Mongo, Mongoose, Node.js, Express.js..., responsive for any device (phone, tablet, computer). Server: Heroku…',
        imagePlus: [
          '/images/portfolio/Game/wikiGame02.png',
          '/images/portfolio/Game/wikiGame03.png',
          '/images/portfolio/Game/wikiGame04.png',
          '/images/portfolio/Game/wikiGame05.png',
        ],
        link: 'https://wikivideogame.herokuapp.com/',
        git: 'https://github.com/captainflo/Game-React',
      },
      {
        id: '21',
        title: 'WIKINETWORK',
        image: '/images/portfolio/Wikinetwork/home.png',
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT',
        description:
          'Application like tinder but oriented professional,Swipe profile, Match with them, live chat, notification on your dashboard...',
        description2:
          'I designed and developed this website from scratch while leveraging prominent, dependable libraries.',
        description3:
          'Technologies used in this project include: React, Redux, Socket.io, Cloudinary, Javascript ,Passport.js, Mongo, Mongoose, Node.js, Express.js..., responsive for any device (phone, tablet, computer).Server: Heroku…',
        imagePlus: [
          '/images/portfolio/Wikinetwork/home02.png',
          '/images/portfolio/Wikinetwork/home03.png',
          '/images/portfolio/Wikinetwork/home04.png',
          '/images/portfolio/Wikinetwork/home05.png',
          '/images/portfolio/Wikinetwork/home06.png',
        ],
        link: 'https://wikinetwork.herokuapp.com',
        git: 'https://github.com/captainflo/Wikinetwork',
      },
      {
        id: '20',
        title: 'WIKISPORT',
        image: '/images/portfolio/ReactSport/sport.png',
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT',
        description:
          'I designed and developed the overall website architecture matching the requested user experience. Base on one Api you can have all the details of sport category, league, team, season, news (some features are no longer accessible due to having reached Api limits:( Ex: player details: https://wikisport.herokuapp.com/player/34162098). Setting up a git repository, versioning Technology used: React, Redux, Cheerio (scrapping news), Javascript, Mongo, Mongoose, Node.js, Express.js, responsive for any device (phone, tablet, computer).Server: Heroku…',
        imagePlus: [
          '/images/portfolio/ReactSport/sport1.png',
          '/images/portfolio/ReactSport/sport2.png',
          '/images/portfolio/ReactSport/sport3.png',
        ],
        link: 'https://wikisport.herokuapp.com',
      },
      {
        id: '19',
        title: 'OWLZ V2',
        image: '/images/portfolio/OwlzV2/owlzv2.png',
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT',
        description:
          'I designed and developed the overall website architecture matching the requested user experience. Guest can apply into the form to be in relation with Owlz liaison (Promoter) then the relation receive alert by email and also into is dashboard. Setting up a git repository, versioning Technology used: React, React-Widget, Redux, SendGrid, Javascript, Mongo, Mongoose, Node.js, Express.js, responsive for any device (phone, tablet, computer).Server: Heroku…',
        imagePlus: [
          '/images/portfolio/OwlzV2/owlzv202.png',
          '/images/portfolio/OwlzV2/owlzv203.png',
          '/images/portfolio/OwlzV2/owlzv204.png',
        ],
        link: 'https://fowlz.herokuapp.com/',
      },
      {
        id: '1',
        title: 'TRACKAPP REACT NATIVE',
        image: '/images/portfolio/TrackApp/trackApp.png',
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT (Course Project)',
        description:
          'I designed and developed the overall web mobile architecture matching the requested user experience. Setting up a git repository, versioning Technology used: React, React Native, React-native-elements,  React Native Maps, Javascript …',
        imagePlus: [],
        link: 'https://github.com/captainflo/Track-ReactNative',
      },
      {
        id: '2',
        title: 'REACT NATIVE FOOD',
        image: '/images/portfolio/ReactNativeFood/food.png',
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT (Course Project)',
        description:
          'I designed and developed the overall web mobile architecture matching the requested user experience.Setting up a git repository, versioning Technology used: React, React Native,Javascript, Api Yelp..',
        link: 'https://github.com/captainflo/React-Native-Restaurant',
      },
      {
        id: '3',
        title: 'MOVIE REACT',
        image: '/images/portfolio/Movie/floweb-movie.png',
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT (Personal Project)',
        description:
          'I designed and developed the overall website architecture matching the requested user experience.Setting up a git repository, versioning Technology used: React, Redux, Materialize, HTML5, CSS3, Javascript, Mongo, Mongoose, Node.js, Express.js, MovieDb Api,UX, responsive for any device (phone, tablet, computer).Server: Heroku',
        imagePlus: [
          '/images/portfolio/Movie/floweb-movie02.png',
          '/images/portfolio/Movie/floweb-movie03.png',
          '/images/portfolio/Movie/floweb-movie04.png',
        ],
        link: 'https://morning-ravine-32595.herokuapp.com/',
      },
      {
        id: '4',
        title: 'RENT VEHICLES REACT',
        image: '/images/portfolio/RentVehicleReact/vehicle.png',
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT (Personal Project)',
        description:
          'I designed and developed the overall website architecture matching the requested user experience.Setting up a git repository, versioning Technology used: React, Redux, Materialize, HTML5, CSS3, Javascript, Mongo, Mongoose, Node.js, Express.js, Google Api, Stripe… ,UX, responsive for any device (phone, tablet, computer).Server: Heroku',
        imagePlus: [
          '/images/portfolio/RentVehicleReact/vehicle02.png',
          '/images/portfolio/RentVehicleReact/vehicle03.png',
          '/images/portfolio/RentVehicleReact/vehicle04.png',
        ],
        test:
          'Login: Ron@gmail.com // Password: Moustache33 // Credit card number : (4242 4242 4242 4242)',
        link: 'https://still-wildwood-65496.herokuapp.com/',
      },
      {
        id: '5',
        title: 'SALON L’ESSENTIEL',
        image: '/images/portfolio/SalonEssentiel2/floweb-salon01.png',
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT',
        description:
          'I designed and developed the overall website architecture matching the requested user experience.Setting up a git repository, versioning Technology used: React, Materialize, HTML5, CSS3, Javascript, Node.js, Express.js… ,UX, responsive for any device (phone, tablet, computer).Server: Heroku.',
        imagePlus: [
          '/images/portfolio/SalonEssentiel2/floweb-salon02.png',
          '/images/portfolio/SalonEssentiel2/floweb-salon03.png',
          '/images/portfolio/SalonEssentiel2/floweb-salon04.png',
        ],
        link: 'https://jc-salon-essentiel.herokuapp.com/',
      },
      {
        id: '9',
        title: 'BEERVILLE',
        image: '/images/portfolio/BeerVille/beerville.png',
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT (Project School)',
        description:
          'I designed and developed the overall website architecture matching the requested user experience.Setting up a git repository, versioning Technology used: Bootstrap, HTML5, CSS3, Javascript, Firebase, Ajax, Jquery …API: DB Breweries ,UX, responsive for any device (phone, tablet, computer).Server: GitHub',
        imagePlus: [
          '/images/portfolio/BeerVille/beerville02.png',
          '/images/portfolio/BeerVille/beerville03.png',
          '/images/portfolio/BeerVille/beerville04.png',
        ],
        link: 'https://theartofnoise.github.io/Project1/index.html',
      },
      {
        id: '7',
        title: 'EMAILY',
        image: '/images/portfolio/Emaily/floweb-emaily.png',
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT (Course Project)',
        description:
          'I designed and developed the overall website architecture matching the requested user experience.Setting up a git repository, versioning Technology used: React, Redux, Materialize, HTML5, CSS3, Javascript, Mongo, Mongoose, Node.js, Express.js, SendGrid, Stripe… ,UX, responsive for any device (phone, tablet, computer).Server: Heroku',
        imagePlus: [
          '/images/portfolio/Emaily/floweb-emaily02.png',
          '/images/portfolio/Emaily/floweb-emaily03.png',
          '/images/portfolio/Emaily/floweb-emaily04.png',
        ],
        test: 'Credit card number : (4242 4242 4242 4242)',
        link: 'https://calm-coast-77343.herokuapp.com/',
      },
      {
        id: '8',
        title: 'OWLZ',
        image: '/images/portfolio/Owlz/owlz.png',
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT (Project School)',
        description:
          'I designed and developed the overall website architecture matching the requested user experience.Setting up a git repository, versioning Technology used: React, Bootstrap, HTML5, CSS3, Javascript, MySQL, Sequelize, Jquery, Node.js, Express.js, Moment.js, Cloudinary, Stripe… ,UX, responsive for any device (phone, tablet, computer).Server: Heroku',
        imagePlus: [
          '/images/portfolio/Owlz/owlz05.png',
          '/images/portfolio/Owlz/owlz03.png',
          '/images/portfolio/Owlz/owlz04.png',
        ],
        test: 'Credit card number : (4242 4242 4242 4242)',
        link: 'https://powerful-anchorage-11786.herokuapp.com/',
      },
      {
        id: '6',
        title: 'REACT WITH API YOUTUBE',
        image: '/images/portfolio/ReactYoutube/react-youtube.png',
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT (Course Project)',
        description:
          'I designed and developed the overall website architecture matching the requested user experience.Setting up a git repository, versioning Technology used: React, Semantic, HTML5, CSS3, Javascript, Axios, Youtube Api… ,UX, responsive for any device (phone, tablet, computer).Server: Heroku',
        link: 'https://murmuring-fjord-10669.herokuapp.com/',
      },
      {
        id: '10',
        title: 'MONGO',
        image: '/images/portfolio/Mongo/home.png',
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT (Project School)',
        description:
          'I designed and developed the overall website architecture matching the requested user experience.Setting up a git repository, versioning Technology used: Bootstrap, HTML5, CSS3, Javascript, Mongo, axios, Jquery, Node.js, Express.js ,Mongoose db, Cheerio, Api: New York Times… ,UX, responsive for any device (phone, tablet, computer).Server: Heroku',
        imagePlus: [
          '/images/portfolio/Mongo/mongo02.png',
          '/images/portfolio/Mongo/mongo03.png',
          '/images/portfolio/Mongo/mongo04.png',
        ],
        link: 'https://fast-everglades-83605.herokuapp.com/index.html',
      },
      {
        id: '11',
        title: 'FLIGHT BOOKING',
        image: '/images/portfolio/Interview/floweb-mundo.png',
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT (Interview Challenge)',
        description:
          'I designed and developed the overall website architecture matching the requested user experience.Setting up a git repository, versioning Technology used: Bootstrap, HTML5, CSS3, Javascript, MySQL, Sequelize, Jquery, Node.js, Express.js, Moment.js… ,UX, responsive for any device (phone, tablet, computer).Server: Heroku',
        imagePlus: [
          '/images/portfolio/Interview/floweb-mundo2.png',
          '/images/portfolio/Interview/floweb-mundo3.png',
          '/images/portfolio/Interview/floweb-mundo4.png',
        ],
        test: 'Api they gave me is not working anymore to make the request :(',
        link: 'https://floating-mesa-22897.herokuapp.com/',
      },
      {
        id: '12',
        title: 'CHALLENGE INTERVIEW',
        image: '/images/portfolio/InterviewChallenge/home.png',
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT (Interview Test)',
        description:
          'I designed and developed the overall website architecture matching the requested user experience.Setting up a git repository, versioning Technology used: Bootstrap, HTML5, CSS3, Javascript, MySQL, Ajax, Jquery, Node.js, Express.js ,Sequelize… ,UX, responsive for any device (phone, tablet, computer). Server: Heroku',
        imagePlus: [
          '/images/portfolio/InterviewChallenge/challenge2.png',
          '/images/portfolio/InterviewChallenge/challenge3.png',
          '/images/portfolio/InterviewChallenge/challenge4.png',
        ],
        link: 'https://ancient-tundra-32640.herokuapp.com/',
      },
      {
        id: '13',
        title: 'MICKE COACH',
        image: '/images/portfolio/Old/Mike/florianlahitte-mike.jpg',
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT',
        description:
          'Having fully understood the client’s need to be attractive on the Web, I designed his website’s identity following Agile mode. The client has a well-defined branding strategy and clear values, I proposed a clean and user-friendly interface undertaking future evolutions and scalability, such as integration of live subscription management and online payment.Technology used: Ruby, Ruby on Rail framework, Bootstrap, HTML5, CSS3, Javascript, PostgreSQL …Setting up a domain name Webdesign: UX, responsive for any device (phone, tablet, computer).Server: Heroku',
        imagePlus: [
          '/images/portfolio/Old/Mike/florianlahitte-mike2.jpg',
          '/images/portfolio/Old/Mike/florianlahitte-mike3.png',
          '/images/portfolio/Old/Mike/floweb-sport.png',
        ],
        link: 'https://coach-mike.herokuapp.com/',
      },
      {
        id: '14',
        title: 'SHARE GOSSES',
        image: '/images/portfolio/Old/ShareGosse/home.png',
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT',
        description:
          'Developed Share-gosses Web App where parents find activities for their kids.A complex and transversal interface using different development methods.Setting up a git repository, versioning Technology used: Ruby, Ruby on Rail framework, Bootstrap, HTML5, CSS3, Javascript, PostgreSQL …API: Facebook Connect, Google Maps Setting up a domain name Architecture : MVC Webdesign: UX, responsive for any device (phone, tablet, computer). Server: Heroku',
        imagePlus: [
          '/images/portfolio/Old/ShareGosse/floweb-sharegosses2.png',
          '/images/portfolio/Old/ShareGosse/floweb-sharegosses3.png',
          '/images/portfolio/Old/ShareGosse/floweb-sharegosses5.png',
        ],
        link: 'https://www.bougetonkid.fr/',
      },
      {
        id: '15',
        title: 'LES ONGLES DE MYLENE',
        image: '/images/portfolio/Old/Mimi/floweb-mylene.png',
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT',
        description:
          'I developed this website from scratch using NodeJS. Inspired by the purity of the owner’s boutique, I focused on her expertise and design.Technology used: Node.js, Sails framework, Bootstrap, HTML5, CSS3, Javascript, Setting up a domain name Webdesign: UX, responsive for any device (phone, tablet, computer). Server: Heroku',
        imagePlus: [
          '/images/portfolio/Old/Mimi/floweb-mylene01.png',
          '/images/portfolio/Old/Mimi/floweb-mylene02.png',
          '/images/portfolio/Old/Mimi/floweb-mylene03.png',
        ],
        link: 'https://mylene-ongle.herokuapp.com/',
      },
      {
        id: '16',
        title: 'SALON LESSENTIEL V1',
        image: '/images/portfolio/Old/Salon/home.png',
        titleDescription: 'HAICUT WEBSITE DEVELOPMENT',
        description:
          'I developed the customer’s website from scratch, highlighting his know-how and shop. A lightweight and user-friendly interface with the necessary information to get in touch and book an appointment.Setting up a git repository, versioning Technology used: Ruby, Ruby on Rail framework, Bootstrap, HTML5, CSS3, Javascript, PostgreSQL …API: Google Maps Webdesign: UX, responsive for any device (phone, tablet, computer). Server: Heroku',
        imagePlus: [
          '/images/portfolio/Old/Salon/floweb-mylene01.png',
          '/images/portfolio/Old/Mimi/floweb-mylene02.png',
          '/images/portfolio/Old/Mimi/floweb-mylene03.png',
        ],
        link: 'https://salon-essentiel.herokuapp.com/',
      },
      {
        id: '17',
        title: 'SUNDAY',
        image: '/images/portfolio/Old/Sun/floweb-sunday01.png',
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT',
        description:
          'I designed and developed the web Application (version 3) architecture matching the requested user experience by this web interface the customer can upload video and picture using a device connect behind the TV. Setting up a git repository, versioning Technology used: Ruby, Ruby on Rail framework, Bootstrap, HTML5, CSS3, Javascript, PostgreSQL …API: Facebook Connect Multi-language management: English, French Setting up a domain name Webdesign: UX, responsive for any device (phone, tablet, computer).',
        imagePlus: [
          '/images/portfolio/Old/Sun/floweb-sunday02.png',
          '/images/portfolio/Old/Sun/floweb-sunday04.png',
          '/images/portfolio/Old/Sun/floweb-sunday06.png',
        ],
        link: 'https://www.sunday.love/us/',
      },
      {
        id: '18',
        title: 'HOPEN FAMILY',
        image: '/images/portfolio/Old/Hopen/01.png',
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT',
        description:
          'I designed and developed the web Application (version 1 and 2) architecture matching the requested user experience by this web interface the customer can upload video and picture using a device connect behind the TV. Setting up a git repository, versioning Technology used: Ruby, Ruby on Rail framework, Bootstrap, HTML5, CSS3, Javascript, PostgreSQL …API: Facebook Connect Multi-language management: English, French Setting up a domain name Webdesign: UX, responsive for any device (phone, tablet, computer).',
        imagePlus: [
          '/images/portfolio/Old/Hopen/02.png',
          '/images/portfolio/Old/Hopen/03.png',
          '/images/portfolio/Old/Hopen/04.png',
        ],
        link: 'https://hopen.herokuapp.com/',
      },
    ],
  };

  renderMultipleImage = (images) => {
    if (images) {
      return images.map((image) => {
        return (
          <div key={image} className="box-image">
            <img src={image} alt={image} />
          </div>
        );
      });
    }
  };

  renderBoxPortfolio = (portfolio) => {
    for (let i = 0; i < portfolio.length; i++) {
      if (this.props.match.params.id === this.state.portfolio[i].id) {
        return (
          <div key={portfolio[i].title}>
            <div className="titleBox center">
              <h4>{this.state.portfolio[i].title}</h4>
            </div>
            <div className="container">
              <div className="row">
                <div className="col m12 s12" key={portfolio[i].title}>
                  <div className="box-image">
                    <img
                      src={this.state.portfolio[i].image}
                      alt={this.state.portfolio[i].title}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="boxDescription">
                  <div className="col m7 s12">
                    {this.renderMultipleImage(portfolio[i].imagePlus)}
                  </div>
                  <div className="col m5 s12">
                    <div className="moreDescription">
                      <h6>{this.state.portfolio[i].titleDescription}</h6>
                      <p>{this.state.portfolio[i].description}</p>
                      <p>{this.state.portfolio[i].description2}</p>
                      <p>{this.state.portfolio[i].description3}</p>
                      <p>{this.state.portfolio[i].test}</p>
                      <a
                        href={this.state.portfolio[i].git}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          style={{ marginLeft: '0px', fontSize: '20px' }}
                          className="fab fa-github-square"
                        ></i>{' '}
                        GitHub
                      </a>
                      <br></br>
                      <a
                        href={this.state.portfolio[i].link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-laptop"></i> Link Application
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  };
  render() {
    const { portfolio } = this.state;
    return <div>{this.renderBoxPortfolio(portfolio)}</div>;
  }
}

export default PortfolioDetail;
