import React from 'react';
import { withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Grid from '@material-ui/core/Grid';
import Button from '../UI/Button/BaseButton';

import classes from './Header.module.css';

const Header = (props) => {
  return (
    <AppBar className={classes.Header}>
      <ToolBar>
        <Grid container>
          <Grid item xs={6} md={10} sm={8}>
            <Button isLink to="/">
              Pökeritö Plan
            </Button>
          </Grid>
          <Grid item xs={3} md={1} sm={2} className={classes.Item}>
            <Button isLink to="/login">
              Login
            </Button>
          </Grid>
          <Grid item xs={3} md={1} sm={2} className={classes.Item}>
            <Button isLink to="/signup">Sign up</Button>
          </Grid>
        </Grid>
      </ToolBar>
    </AppBar>
  );
};

export default withRouter(Header);
