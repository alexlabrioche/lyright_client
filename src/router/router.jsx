import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/Home';
import ArtistsPage from '../pages/Artists';
import GamePage from '../pages/Game';
import AuthPage from '../pages/Auth';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/artistes">
          <ArtistsPage />
        </Route>
        <Route path="/jouer">
          <GamePage />
        </Route>
        <Route path="/connexion">
          <AuthPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
