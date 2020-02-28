import React, { useEffect } from 'react';
import { Button, Flex } from 'rebass';
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

  function initNewGame() {
    dispatch(addHost(user.id));
    dispatch(apiRequest(ARTISTS, '/artists'));
    dispatch(apiRequest(NEW_GAME, '/game/code'));
  }

  useEffect(() => {
    if (user.code) {
      dispatch(addSecretCode(user.code));
    }
  }, [user.code]);

  function handleArtist(artistId) {
    dispatch(addArtist(artistId));
  }

  return (
    <AppLayout title="Jouer">
      {user.code ? (
        <GameSettings
          code={user.code}
          onClick={handleArtist}
          artists={artistsList}
        />
      ) : (
        <Flex justifyContent="center" alignItems="center" flexGrow={1}>
          <Button onClick={initNewGame} fontSize={5} p={3} fontWeight="medium">
            Commencer une partie
          </Button>
        </Flex>
      )}
    </AppLayout>
  );
}

export default Game;
