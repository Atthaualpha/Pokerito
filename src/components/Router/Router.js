import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../../containers/Login/Login';
import Signup from '../../containers/Signup/Signup';
import Logout from '../../containers/Logout/Logout';

const RouterConfig = (props) => {
  const unauthenticatedRoutes = [
    {
      path: '/',
      exact: true,
      component: Home,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/signup',
      component: Signup,
    },
  ];

  const authenticatedRoutes = [
    {
      path: '/',
      exact: true,
      component: Home,
    },
    {
      path: '/logout',
      component: Logout,
    },
  ];

  const isAuthenticated = props.isAuthenticated;
  let routes = unauthenticatedRoutes;
  if (isAuthenticated) {
    routes = authenticatedRoutes;
  }

  return (
    <Switch>
      {routes.map((route, i) => {
        return <Route key={i} path={route.path} exact={route.exact} component={route.component}></Route>;
      })}
      <Redirect to="/" />
    </Switch>
  );
};

export default RouterConfig;
