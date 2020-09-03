import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Router from './components/Router/Router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import classes from './App.module.css';
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className={classes.App}>
          <Router />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
