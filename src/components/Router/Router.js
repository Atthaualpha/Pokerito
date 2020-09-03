import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

const RouterConfig = () => {
  const routes = [
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
    {
      path: '*',
      component: Home,
    },
  ];

  return (
    <Switch>
      {routes.map((route, i) => {
        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            component={route.component}
          ></Route>
        );
      })}
    </Switch>
  );
};

export default RouterConfig;
