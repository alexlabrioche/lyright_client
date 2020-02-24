import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/Home';
import ArtistsPage from '../pages/Artists';
import SongPage from '../pages/Song';
import GamePage from '../pages/Game';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/artistes">
          <ArtistsPage />
        </Route>
        <Route path="/chanson/:song_id">
          <SongPage />
        </Route>
        <Route path="/jouer">
          <GamePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
