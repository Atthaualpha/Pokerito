import React from 'react';
import {useDispatch} from 'react-redux'
import { withRouter } from 'react-router-dom';
import * as actions from '../../store/actions/index'

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Grid from '@material-ui/core/Grid';
import Button from '../UI/BaseButton/BaseButton';
import Loader from '../UI/Loader/Loader';
import UserIcon from '@material-ui/icons/AccountCircle';

import classes from './Header.module.css';
import Dropdown from '../UI/Dropdown/Dropdown';
import DropdownItem from '../UI/DropdownItem/DropdownItem';

const Header = (props) => {

  const dispatch = useDispatch();

  const unauthMenu = (
    <Grid container>
      <Grid item xs={4} md={6} sm={6}>
        <Button isLink to="/" color="blank" unborder>
          Pökeritö Plan
        </Button>
      </Grid>
      <Grid item xs={2} md={2} sm={2} className={classes.Item}>
        <Button isLink to="/">
          Quick Play
        </Button>
      </Grid>
      <Grid item xs={2} md={2} sm={2} className={classes.Item}>
        <Button isLink to="/signin">
          Sign in
        </Button>
      </Grid>
      <Grid item xs={2} md={2} sm={2} className={classes.Item}>
        <Button isLink to="/signup">
          Sign up
        </Button>
      </Grid>
    </Grid>
  );

  const authMenu = (
    <Grid container>
      <Grid item xs={4} md={6} sm={4}>
        <Button isLink to="/" color="blank" unborder>
          Pökeritö Plan
        </Button>
      </Grid>
      <Grid item xs={2} md={2} sm={3} className={classes.Item}>
        <Button>Join Room</Button>
      </Grid>
      <Grid item xs={2} md={2} sm={3} className={classes.Item}>
        <Button clicked={() => dispatch(actions.openModalCreateRoom())}>Create Room</Button>
      </Grid>
      <Grid item xs={2} md={2} sm={2} className={classes.Item}>
        <Dropdown endIcon={<UserIcon />} text={props.username}>
          <DropdownItem to="/account">Account</DropdownItem>
          <DropdownItem to="/logout">Logout</DropdownItem>
        </Dropdown>
      </Grid>
    </Grid>
  );

  return (
    <AppBar className={classes.Header}>
      <ToolBar>{props.isAuthenticated ? authMenu : unauthMenu}</ToolBar>
      {props.isLoading && <Loader />}
    </AppBar>
  );
};

export default withRouter(Header);
