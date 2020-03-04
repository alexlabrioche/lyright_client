import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

import useMobile from '../hooks/useMobileDevice';

import HomePage from '../pages/Home';
import ArtistsPage from '../pages/Artists';
import GamePage from '../pages/Game';
import InGamePage from '../pages/InGame';
import AuthPage from '../pages/Auth';
import UserSpacePage from '../pages/UserSpace';
import SplashScreen from '../layouts/SplashScreen';

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) return <SplashScreen />;
  return children;
}

function PrivateRoute({ children, ...rest }) {
  const auth = useSelector(state => state.firebase.auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default function AppRouter() {
  const [isMobile] = useMobile();
  return (
    <AuthIsLoaded>
      <BrowserRouter>
        <Switch>
          <Route path="/artistes">
            <ArtistsPage />
          </Route>
          <PrivateRoute path="/jouer/:code">
            {!isMobile ? <InGamePage /> : <Redirect to={'/'} />}
          </PrivateRoute>
          <PrivateRoute path="/jouer">
            {!isMobile ? <GamePage /> : <Redirect to={'/'} />}
          </PrivateRoute>
          <PrivateRoute path="/espace-perso">
            {!isMobile ? <UserSpacePage /> : <Redirect to={'/'} />}
          </PrivateRoute>
          <Route path="/connexion">
            <AuthPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthIsLoaded>
  );
}
