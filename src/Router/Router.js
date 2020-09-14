import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../components/Home/Home';
import Signup from '../containers/Signup/Signup';
import Logout from '../containers/Logout/Logout';
import Signin from '../containers/Signin/Signin';
import Account from '../containers/Account/Account';

const RouterConfig = (props) => {
  const unauthenticatedRoutes = [
    {
      path: '/',
      exact: true, 
      component: Home,
    },
    {
      path: '/signin',
      component: Signin,
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
      path: '/account',
      component: Account,
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
