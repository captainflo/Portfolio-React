import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import Skill from '../components/Skill';
import Portfolio from '../components/Portfolio';
import BannerFooter from '../components/BannerFooter';
import Footer from '../components/Footer';

function HomeScreen() {
  return (
    <div>
      <Banner />
      <div className="container">
        <About />
      </div>
      <Skill />
      <Portfolio />
      <BannerFooter />
      <Footer />
    </div>
  );
}

export default HomeScreen;
