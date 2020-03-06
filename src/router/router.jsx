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

import {
  HOME_ROUTE,
  ARTISTS_ROUTE,
  IN_GAME_ROUTE,
  SETUP_GAME_ROUTE,
  USER_SPACE_ROUTE,
  AUTH_ROUTE,
} from './constants';

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth);
  const [isAnimationCompleted, setIsAnimationCompleted] = React.useState(false);

  if (!isLoaded(auth) || !isAnimationCompleted)
    return <SplashScreen isCompleted={setIsAnimationCompleted} />;
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
              pathname: HOME_ROUTE,
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
          <Route path={ARTISTS_ROUTE}>
            <ArtistsPage />
          </Route>
          <PrivateRoute path={IN_GAME_ROUTE}>
            {!isMobile ? <InGamePage /> : <Redirect to={HOME_ROUTE} />}
          </PrivateRoute>
          <PrivateRoute path={SETUP_GAME_ROUTE}>
            {!isMobile ? <GamePage /> : <Redirect to={HOME_ROUTE} />}
          </PrivateRoute>
          <PrivateRoute path={USER_SPACE_ROUTE}>
            {!isMobile ? <UserSpacePage /> : <Redirect to={HOME_ROUTE} />}
          </PrivateRoute>
          <Route path={AUTH_ROUTE}>
            <AuthPage />
          </Route>
          <Route path={HOME_ROUTE}>
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthIsLoaded>
  );
}
