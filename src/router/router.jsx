import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import useMobile from '../hooks/useMobileDevice';

import HomePage from '../pages/Home';
import ArtistsPage from '../pages/Artists';
import GamePage from '../pages/Game';
import AuthPage from '../pages/Auth';

function DesktopRoute({ children, ...rest }) {
  const [isMobile] = useMobile();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isMobile ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function PrivateRoute({ children, ...rest }) {
  const { isAuth } = useSelector(({ user }) => user);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/connexion',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/artistes">
          <ArtistsPage />
        </Route>
        <PrivateRoute path="/jouer">
          <GamePage />
        </PrivateRoute>
        <DesktopRoute path="/connexion">
          <AuthPage />
        </DesktopRoute>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
