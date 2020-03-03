import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useMobile from '../hooks/useMobileDevice';

import HomePage from '../pages/Home';
import ArtistsPage from '../pages/Artists';
import GamePage from '../pages/Game';
import InGamePage from '../pages/InGame';
import AuthPage from '../pages/Auth';
import UserSpacePage from '../pages/UserSpace';

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
function authMiddleware(Component, authenticated) {
  return authenticated ? <Component /> : <Redirect to={'/'} />;
}

export default function AppRouter() {
  const { isAuth } = useSelector(({ user }) => user);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/artistes">
          <ArtistsPage />
        </Route>
        <DesktopRoute path="/jouer/:code">
          {authMiddleware(InGamePage, isAuth)}
        </DesktopRoute>
        <DesktopRoute path="/jouer">
          {authMiddleware(GamePage, isAuth)}
        </DesktopRoute>
        <DesktopRoute path="/espace-perso">
          {authMiddleware(UserSpacePage, isAuth)}
        </DesktopRoute>
        <DesktopRoute path="/connexion">
          <AuthPage />
        </DesktopRoute>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
