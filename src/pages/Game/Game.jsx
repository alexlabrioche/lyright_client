import React from 'react';
import { Button, Flex } from 'rebass';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { apiRequest } from '../../store/actions/apiRequest';
import { NEW_GAME } from '../../store/actions/types';

import AppLayout from '../../layouts/AppLayout';
import Settings from './components/GameSettings';
import { initSocketIo } from '../../store/actions/socketio';

function Game() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { artistsList } = useSelector(({ artists }) => artists);
  const game = useSelector(({ game }) => game);
  function initNewGame() {
    dispatch(
      apiRequest(NEW_GAME, {
        verb: 'get',
        uri: '/game/new',
      }),
    );
  }

  function startGame() {
    dispatch(initSocketIo());
    history.push(`/jouer/${game.code}`);
  }

  return (
    <AppLayout title="Jouer">
      {!game.isInitialized ? (
        <Flex justifyContent="center" alignItems="center">
          <Button onClick={initNewGame} fontSize={4} p={3} fontWeight="medium">
            Commencer une partie
          </Button>
        </Flex>
      ) : (
        <Settings game={game} artists={artistsList} start={startGame} />
      )}
    </AppLayout>
  );
}

export default Game;
