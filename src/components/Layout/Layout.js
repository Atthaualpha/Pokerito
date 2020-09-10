import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import classes from './Layout.module.css';
const Layout = (props) => {
  return (
    <div className={classes.Layout}> 
      <Header />
      <main className={classes.Main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
