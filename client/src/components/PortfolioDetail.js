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
        id: '26',
        title: 'JOB FINDING APP',
        image: '/images/portfolio/FindJob/find2.png',
        titleDescription: 'JOB SEEKER (COUSE PROJECT)',
        description:
          'The goal of this project was to create a job app in react native and include the swipe card by tinder, based on your geolocalisation you can search job around you, the api indeed will give you all the job (play with dummy data because API Indeed reach limit or must pay) and understand how work Expo, React-native-maps, Redux, authentification with facebook...',
        description3:
          'Technologies used in this project include: React, React-Native, Expo, expo-facebook, expo-location, react-redux, react-native-elements, react-native-maps...',
        git: 'https://github.com/captainflo/ReactNative-JobFindingApp',
      },
      {
        id: '25',
        title: 'SHOP APP',
        image: '/images/portfolio/ShopApp/shop-app.png',
        titleDescription: 'E-COMMERCE APP (COUSE PROJECT)',
        description:
          'The goal of this project was to create a E-commerce app in react native, create product, purchase, consult your order, authenticate and understand how to play with Expo, react navigation, redux, Firebase, authenticated with firebase...',
        description3:
          'Technologies used in this project include: React, React-Native, Expo, react-navigation,react-redux, react-navigation-stack, react-navigation-tabs, Firebase...',
        git: 'https://github.com/captainflo/Shop-React-Native',
      },
      {
        id: '24',
        title: 'MEAL APP',
        image: '/images/portfolio/MealApp/Meal-app.png',
        titleDescription: 'MEAL APP (COUSE PROJECT)',
        description:
          'The goal of this project was to display some meal by categories, filter, add as favorite and understand how to play with Expo, react navigation, redux...',
        description3:
          'Technologies used in this project include: React, React-Native, Expo, react-navigation,react-redux, react-navigation-stack, react-navigation-tabs...',
        git: 'https://github.com/captainflo/Meal-app-react-native',
      },
      {
        id: '23',
        title: 'SOUND GRAB',
        image: '/images/portfolio/SoundGrab/soundgrab01.png',
        titleDescription: 'PREMIUM STREAMING SERVICE',
        description:
          'The concept of this project was to create an apple music-style premium streaming service that allowed users to either become premium users or purchase streaming rights to their favoirte songs.',
        description2:
          'I designed and developed this website from scratch while leveraging prominent, dependable libraries.',
        description3:
          'Technologies used in this project include: React, Redux, Javascript ,Passport.js, Mongo, Mongoose, Node.js, Express.js, Stripe Api..., responsive for any device (phone, tablet, computer). Server: Heroku…',
        imagePlus: [
          '/images/portfolio/SoundGrab/soundgrab02.png',
          '/images/portfolio/SoundGrab/soundgrab03.png',
          '/images/portfolio/SoundGrab/soundgrab04.png',
          '/images/portfolio/SoundGrab/soundgrab05.png',
          '/images/portfolio/SoundGrab/soundgrab06.png',
        ],
        link: 'https://soundgrab.herokuapp.com/',
        git: 'https://github.com/captainflo/GrabSound',
      },
      {
        id: '22',
        title: 'WIKI GAME',
        image: '/images/portfolio/Game/wikiGame.png',
        titleDescription: 'GAMERS KNOWLEDGEBASE APP',
        description:
          'The goal of this project was to consolidate game data and analytics into a single platform that offered gameplay examples, lore, ratings, reviews, and any information a gamer might need to make an informed decision.',
        description2:
          'With so many data points on so many games, it was difficult to figure out how to filter out the content coming from the RAWG Video Games API and cater the high quality content to the user.',
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
        titleDescription: 'PROFESSIONAL NETWORKING APP',
        description:
          'The concept of this app is to offer a tinder-style matching between professionals. Offering a public profile, private instant chat with notifications, and contact sharing.',
        description2:
          'This project required the use of a new set of UI-based libraries to achieve the simple yet effective swipe functionality that has become a staple of our culture, but now applied to professional networking.',
        description3:
          'Technologies used in this project include: React, Redux, Socket.io, Cloudinary, Javascript ,Passport.js, Mongo, Mongoose, Node.js, Express.js..., responsive for any device (phone, tablet, computer). Server: Heroku…',
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
        titleDescription: 'LIVE SPORT ANALYTICS APP ',
        description:
          'Using a single API, this project enables sports fans to track and analyze games, seasons, players, teams, and relevant news with realtime data in a user friendly interface. As of May 6, 2020, some features are not accessible due to API limits being reached.( e.g.: player details: https://wikisport.herokuapp.com/player/34162098).',
        description2:
          'A principle difficulty in this project was to create a consitent framework around very different sports so that they work and feel the same.',
        description3:
          'Technologies used in this project include: React, Redux, Cheerio (Scrapping News from New York Times), Javascript, Mongo, Mongoose, Node.js, Express.js, responsive for any device (phone, tablet, computer). Server: Heroku…',
        imagePlus: [
          '/images/portfolio/ReactSport/sport1.png',
          '/images/portfolio/ReactSport/sport2.png',
          '/images/portfolio/ReactSport/sport3.png',
        ],
        link: 'https://wikisport.herokuapp.com',
        git: 'https://github.com/captainflo/Sport-React',
      },
      {
        id: '19',
        title: 'OWLZ V2',
        image: '/images/portfolio/OwlzV2/owlzv2.png',
        titleDescription: 'RESERVATION LEAD MAGNET APP',
        description:
          'This app offers a high-end experience for tourists whom stay at partnered hotels by handling their requests and setting the arrangements for any event they might want to have.',
        description2:
          'The wizard form collects information in steps to maximize the conversion of users. Once a request is submitted, it is logged on the admin dashboard and can be handled by the app admin.',
        description3:
          'Technologies used in this project include: React, React-Widget, Redux, SendGrid, Javascript, Mongo, Mongoose, Node.js, Express.js, responsive for any device (phone, tablet, computer). Server: Heroku…',
        imagePlus: [
          '/images/portfolio/OwlzV2/owlzv202.png',
          '/images/portfolio/OwlzV2/owlzv203.png',
          '/images/portfolio/OwlzV2/owlzv204.png',
        ],
        link: 'https://fowlz.herokuapp.com/',
        git: 'https://github.com/owlzApp/owlzApp',
      },
      {
        id: '1',
        title: 'TRACKAPP REACT NATIVE',
        image: '/images/portfolio/TrackApp/trackApp.png',
        titleDescription: 'ACTIVITY TRACKER APP (COUSE PROJECT)',
        description:
          'This react-native app leverages the location tracking capabilities of the phone to log your runs or runs in real time and presents you with the output in kilometers and time.',
        description2:
          'Technologies used in this project include: React, React Native, React-native-elements,  React Native Maps, Javascript …',
        imagePlus: [],
        git: 'https://github.com/captainflo/Track-ReactNative',
      },
      {
        id: '2',
        title: 'REACT NATIVE FOOD',
        image: '/images/portfolio/ReactNativeFood/food.png',
        titleDescription: 'MEALFINDER APP (COURSE PROJECT)',
        description:
          'Search for restaurants by menu items, food types, or cultural backgrounds based on location and time!',
        description2:
          'Technologies used in this project include: React, React Native,Javascript, Api Yelp..',
        git: 'https://github.com/captainflo/React-Native-Restaurant',
      },
      {
        id: '3',
        title: 'MOVIE REACT',
        image: '/images/portfolio/Movie/floweb-movie.png',
        titleDescription: 'MOVIEFACTS APP',
        description:
          'Using a single API (TMDB), this app offers easy access to deeper details into shows and movies with regards to their cast, their plot, reviews,  and other information that gives you a wealth of context.',
        description2:
          'The difficulty here was to make suggestions for related movies based on the current movie or actor that is being viewed.',
        description3:
          'Technologies used in this project include: React, Redux, Materialize, HTML5, CSS3, Javascript, Mongo, Mongoose, Node.js, Express.js, MovieDb Api,UX, responsive for any device (phone, tablet, computer). Server: Heroku',
        imagePlus: [
          '/images/portfolio/Movie/floweb-movie02.png',
          '/images/portfolio/Movie/floweb-movie03.png',
          '/images/portfolio/Movie/floweb-movie04.png',
        ],
        link: 'https://morning-ravine-32595.herokuapp.com/',
        git: 'https://github.com/captainflo/Movie-react',
      },
      {
        id: '4',
        title: 'RENT VEHICLES REACT',
        image: '/images/portfolio/RentVehicleReact/vehicle.png',
        titleDescription: 'LUXURY TRANSPORT APP',
        description:
          'Reserve or rent out your boat, car, motorcycle for as short as half a day, an event or even a long-term lease. This app is similar to AirBnB in that it allows vehicle owners to rent out their vehicles for extra income in a way that is hassle free and that has transparent transactions.',
        description2:
          'The principle difficulty in this project was the Google Map API that needed to be customized, filtered through, and updated in realtime.',
        description3:
          'Technologies used in this project include: React, Redux, Materialize, HTML5, CSS3, Javascript, Mongo, Mongoose, Node.js, Express.js, Google Api, Stripe… ,UX, responsive for any device (phone, tablet, computer).Server: Heroku',
        imagePlus: [
          '/images/portfolio/RentVehicleReact/vehicle02.png',
          '/images/portfolio/RentVehicleReact/vehicle03.png',
          '/images/portfolio/RentVehicleReact/vehicle04.png',
        ],
        test:
          'Login: Ron@gmail.com // Password: Moustache33 // Credit card number : (4242 4242 4242 4242)',
        link: 'https://still-wildwood-65496.herokuapp.com/',
        git: 'https://github.com/captainflo/React-Vehicles',
      },
      {
        id: '5',
        title: 'SALON L’ESSENTIEL',
        image: '/images/portfolio/SalonEssentiel2/floweb-salon01.png',
        titleDescription: 'LOCAL SALON LANDING PAGE',
        description:
          'I designed and developed the overall website architecture matching the requested user experience. Technologies used in this project include: React, Materialize, HTML5, CSS3, Javascript, Node.js, Express.js… ,UX, responsive for any device (phone, tablet, computer).Server: Heroku.',
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
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT (PROJECT SCHOOL)',
        description:
          'This App is a way for the learning connoisseur to find legitimate breweries approved by an already experienced audience, while also having convenient tools for learning about certain popular beer brands and types.',
        description2:
          'I designed and developed the overall website architecture matching the requested user experience. Technologies used in this project include: Bootstrap, HTML5, CSS3, Javascript, Firebase, Ajax, Jquery …API: DB Breweries some features are not accessible due to API limits being reached...,UX, responsive for any device (phone, tablet, computer).Server: GitHub',
        imagePlus: [
          '/images/portfolio/BeerVille/beerville02.png',
          '/images/portfolio/BeerVille/beerville03.png',
          '/images/portfolio/BeerVille/Beerville04.png',
        ],
        link: 'https://theartofnoise.github.io/Project1/index.html',
        git: 'https://github.com/captainflo/beerville',
      },
      {
        id: '7',
        title: 'EMAILY',
        image: '/images/portfolio/Emaily/floweb-emaily.png',
        titleDescription: 'REVIEWCAMPAIGNS (COURSE WORK)',
        description:
          ' Helps your customers to give reviews and provide valuable feedback via emails.',
        description2:
          'Technologies used in this project include: React, Redux, Materialize, HTML5, CSS3, Javascript, Mongo, Mongoose, Node.js, Express.js, SendGrid, Stripe… ,UX, responsive for any device (phone, tablet, computer).Server: Heroku',
        imagePlus: [
          '/images/portfolio/Emaily/floweb-emaily02.png',
          '/images/portfolio/Emaily/floweb-emaily03.png',
          '/images/portfolio/Emaily/floweb-emaily04.png',
        ],
        test: 'Credit card number : (4242 4242 4242 4242)',
        link: 'https://calm-coast-77343.herokuapp.com/',
        git: 'https://github.com/captainflo/SurveyApp-react',
      },
      {
        id: '8',
        title: 'OWLZ',
        image: '/images/portfolio/Owlz/owlz.png',
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT (PROJECT SCHOOL)',
        description:
          'This is my final Project from the University of Miami, The purpose of the app is to connect you with the best liaisons in the city',
        description2:
          'I designed and developed the overall website architecture, Technologies used: React, Bootstrap, HTML5, CSS3, Javascript, MySQL, Sequelize, Jquery, Node.js, Express.js, Moment.js, Cloudinary, Stripe… ,UX, responsive for any device (phone, tablet, computer).Server: Heroku',
        imagePlus: [
          '/images/portfolio/Owlz/owlz05.png',
          '/images/portfolio/Owlz/owlz03.png',
          '/images/portfolio/Owlz/owlz04.png',
        ],
        test: 'Credit card number : (4242 4242 4242 4242)',
        link: 'https://powerful-anchorage-11786.herokuapp.com/',
        git: 'https://github.com/captainflo/owlz',
      },
      {
        id: '6',
        title: 'REACT WITH API YOUTUBE',
        image: '/images/portfolio/ReactYoutube/react-youtube.png',
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT (COURSE WORK)',
        description:
          'I designed and developed the overall website architecture matching the requested user experience.Setting up a git repository, versioning Technology used: React, Semantic, HTML5, CSS3, Javascript, Axios, Youtube Api… ,UX, responsive for any device (phone, tablet, computer).',
        git: 'https://github.com/captainflo/youtube-react',
      },
      {
        id: '10',
        title: 'MONGO',
        image: '/images/portfolio/Mongo/home.png',
        titleDescription: 'SCRAPING ARTICLES (PROJECT SCHOOL)',
        description:
          'An app that scrapes articles from the New York Times website and lets users save articles and leave comments on the latest news.',
        description2:
          'Setting up a git repository, versioning Technology used: Bootstrap, HTML5, CSS3, Javascript, Mongo, axios, Jquery, Node.js, Express.js ,Mongoose db, Cheerio, Api: New York Times… ,UX, responsive for any device (phone, tablet, computer).Server: Heroku',
        imagePlus: [
          '/images/portfolio/Mongo/mongo02.png',
          '/images/portfolio/Mongo/mongo03.png',
          '/images/portfolio/Mongo/mongo04.png',
        ],
        link: 'https://fast-everglades-83605.herokuapp.com/index.html',
        git: 'https://github.com/captainflo/mongo-scraper',
      },
      {
        id: '11',
        title: 'FLIGHT BOOKING',
        image: '/images/portfolio/Interview/floweb-mundo.png',
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT (INTERVIEW TEST)',
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
        titleDescription: 'SOCIAL NETWORK DEVELOPMENT (INTERVIEW TEST)',
        description:
          'I designed and developed the overall website architecture matching the requested user experience.Setting up a git repository, versioning Technology used: Bootstrap, HTML5, CSS3, Javascript, MySQL, Ajax, Jquery, Node.js, Express.js ,Sequelize… ,UX, responsive for any device (phone, tablet, computer). Server: Heroku',
        imagePlus: [
          '/images/portfolio/InterviewChallenge/challenge2.png',
          '/images/portfolio/InterviewChallenge/challenge3.png',
          '/images/portfolio/InterviewChallenge/challenge4.png',
        ],
        link: 'https://ancient-tundra-32640.herokuapp.com/',
        git: 'https://github.com/captainflo/challenge-intern',
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
                      {this.state.portfolio[i].git && (
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
                      )}
                      <br></br>
                      {this.state.portfolio[i].link && (
                        <a
                          href={this.state.portfolio[i].link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fas fa-laptop"></i> Link Application
                        </a>
                      )}
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
