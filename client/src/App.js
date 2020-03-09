import React from 'react';
import 'animate.css/animate.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import PortfolioDetail from './components/PortfolioDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/portfolio/:id" component={PortfolioDetail} />
      </BrowserRouter>
    </div>
  );
}

export default App;
