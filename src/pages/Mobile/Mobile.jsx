import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Heading, Box, Button, Flex } from 'rebass';
import { useLocation, useHistory } from 'react-router-dom';

import MobileLayout from '../../layouts/MobileLayout';
import { apiRequest } from '../../store/actions/apiRequest';
import { PSEUDO, JOIN } from '../../store/actions/types';
import JoinGame from './components/JoinGame';
import { initSocketIo } from '../../store/actions/socketio';

export default function Mobile() {
  const game = useSelector(({ game }) => game);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      history.push('/');
    }
  });

  function onSubmitJoinGame(data) {
    const body = game.suggestedPseudo
      ? { ...data, pseudo: game.suggestedPseudo, enhanceName: false }
      : { ...data, enhanceName: data.pseudo ? true : false };
    dispatch(
      apiRequest(JOIN, {
        verb: 'post',
        uri: '/game/join',
        data: body,
      }),
    );
  }

  function getStupidPseudo(e) {
    e.preventDefault();
    dispatch(
      apiRequest(PSEUDO, {
        verb: 'get',
        uri: '/game/pseudo',
      }),
    );
  }

  function startGame() {
    dispatch(initSocketIo());
    history.push(`/jouer/${game.code}`);
  }

  return (
    <MobileLayout>
      {!game.isInitialized ? (
        <Box>
          <Heading
            sx={{
              fontWeight: 'bold',
              fontSize: 5,
              textAlign: 'center',
              my: 5,
            }}
          >
            Lyright
          </Heading>
          <JoinGame
            onSubmit={onSubmitJoinGame}
            pseudo={game.suggestedPseudo}
            onClickPseudo={getStupidPseudo}
          />
        </Box>
      ) : (
        <Flex
          flexWrap={1}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Heading my={3}>Coucou</Heading>
          <Heading my={2} fontSize={4}>
            {game.pseudo}
          </Heading>
          <Button mt={7} onClick={startGame}>
            Rejoindre
          </Button>
        </Flex>
      )}
    </MobileLayout>
  );
}
