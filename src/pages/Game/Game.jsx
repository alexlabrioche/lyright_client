import React from 'react';
import AppLayout from '../../layouts/AppLayout';
import { Heading, Box, Button } from 'rebass';
import { useSelector, useDispatch } from 'react-redux';
import { apiRequest } from '../../actions/apiRequest';
import { NEW_GAME } from '../../actions/types';
import DisplayCode from './components/DisplayCode';

function Game() {
  const dispatch = useDispatch();
  const { loading } = useSelector(({ api }) => api);
  const { code } = useSelector(({ user }) => user);

  function initNewGame() {
    dispatch(apiRequest(NEW_GAME, '/game/code'));
  }

  return (
    <AppLayout title="Jouer">
      <Heading fontSize={[3, 5]}>On va dire que t'es connecté hein...</Heading>
      <Box mt={6}>
        {code ? (
          <DisplayCode code={code} />
        ) : (
          <Button onClick={initNewGame}>Commencer une partie</Button>
        )}
      </Box>
    </AppLayout>
  );
}

export default Game;
