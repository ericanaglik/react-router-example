import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import NavBar from './NavBar/NavBar'
import Home from './Home'
import About from './About'
import Resume from './Resume'
import SocialLinks from './Contact'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={SocialLinks} />
    </div>
    </BrowserRouter>
  );
}

export default App;
