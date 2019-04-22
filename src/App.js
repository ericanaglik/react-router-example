import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';

import Home from './Home'
import About from './About'
import Resume from './Resume'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="resume">Resumé</Link>
      </div>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/resume" component={Resume} />
    </div>
    </BrowserRouter>
  );
}

export default App;
