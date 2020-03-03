import React from 'react';
import { Button, Flex } from 'rebass';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { apiRequest } from '../../actions/apiRequest';
import { initSocketIo } from '../../actions/socketio';
import { NEW_GAME, ARTISTS } from '../../actions/types';
import { addArtist } from '../../actions/gameActions';

import IoLayout from '../../layouts/IoLayout';
import AppLayout from '../../layouts/AppLayout';
import Settings from './components/GameSettings';

function Game() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { artistsList } = useSelector(({ artists }) => artists);
  const game = useSelector(({ game }) => game);
  const user = useSelector(({ user }) => user);

  console.log('game', game);
  console.log('user', user);

  function initNewGame() {
    dispatch(
      apiRequest(ARTISTS, {
        verb: 'get',
        uri: '/artists',
      }),
    );
    dispatch(
      apiRequest(NEW_GAME, {
        verb: 'post',
        uri: '/game/init',
        data: { userId: user.connected.id },
      }),
    );
    dispatch(initSocketIo());
  }

  function startGame() {
    history.push(`/jouer/${game.code}`);
  }

  function handleArtist(artistId) {
    dispatch(addArtist(artistId));
  }

  return (
    <IoLayout>
      <AppLayout title="Jouer">
        {!game.isInitialized ? (
          <Flex justifyContent="center" alignItems="center" flexGrow={1}>
            <Button
              onClick={initNewGame}
              fontSize={4}
              p={3}
              fontWeight="medium"
            >
              Commencer une partie
            </Button>
          </Flex>
        ) : (
          <Settings
            game={game}
            onClick={handleArtist}
            artists={artistsList}
            start={startGame}
          />
        )}
      </AppLayout>
    </IoLayout>
  );
}

export default Game;
