import React from 'react';
import { withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Grid from '@material-ui/core/Grid';
import Button from '../UI/BaseButton/BaseButton';
import Loader from '../UI/Loader/Loader';

import classes from './Header.module.css';

const Header = (props) => {
  return (
    <AppBar className={classes.Header}>
      <ToolBar>
        <Grid container>
          <Grid item xs={6} md={10} sm={8}>
            <Button isLink to="/" color="blank" unborder>
              Pökeritö Plan
            </Button>
          </Grid>
          {!props.isAuthenticated ? (
            <Grid item xs={3} md={1} sm={2} className={classes.Item}>
              <Button isLink to="/login">
                Login
              </Button>
            </Grid>
          ) : null}
          {!props.isAuthenticated ? (
            <Grid item xs={3} md={1} sm={2} className={classes.Item}>
              <Button isLink to="/signup">
                Sign up
              </Button>
            </Grid>
          ) : null}
          {props.isAuthenticated ? (
            <Grid item xs={6} md={2} sm={4} className={classes.Item}>
              <Button isLink to="/logout">
                Logout
              </Button>
            </Grid>
          ) : null}
        </Grid>
      </ToolBar>
      {props.isLoading && <Loader />}
    </AppBar>
  );
};

export default withRouter(Header);
