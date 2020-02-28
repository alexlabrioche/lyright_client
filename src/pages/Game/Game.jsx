import React from 'react';
import { Box, Button } from 'rebass';
import { useSelector, useDispatch } from 'react-redux';

import { apiRequest } from '../../actions/apiRequest';
import { NEW_GAME, ARTISTS } from '../../actions/types';
import { addHost, addArtist, addSecretCode } from '../../actions/gameActions';

import AppLayout from '../../layouts/AppLayout';
import GameSettings from './components/GameSettings';

function Game() {
  const dispatch = useDispatch();
  // const { loading } = useSelector(({ api }) => api);
  const { artistsList } = useSelector(({ artists }) => artists);
  const game = useSelector(({ game }) => game);
  const user = useSelector(({ user }) => user);
  console.log('game.artists', game);

  function initNewGame() {
    dispatch(addHost(user.id));
    dispatch(apiRequest(ARTISTS, '/artists'));
    dispatch(apiRequest(NEW_GAME, '/game/code'));
  }

  React.useEffect(() => {
    console.log('user.code', user.code);
    if (user.code) {
      dispatch(addSecretCode(user.code));
    }
  }, [user.code]);

  function handleArtist(id) {
    dispatch(addArtist(id));
  }

  return (
    <AppLayout title="Jouer">
      <Box>
        {user.code ? (
          <GameSettings
            code={user.code}
            onClick={handleArtist}
            artists={artistsList}
          />
        ) : (
          <Button onClick={initNewGame}>Commencer une partie</Button>
        )}
      </Box>
    </AppLayout>
  );
}

export default Game;
