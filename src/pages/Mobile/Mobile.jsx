import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Heading, Box, Button } from 'rebass';

import MobileLayout from '../../layouts/MobileLayout';
import { apiRequest } from '../../store/actions/apiRequest';
import { PSEUDO } from '../../store/actions/types';
import JoinGame from './components/JoinGame';

export default function Mobile() {
  const { guest } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  function onSubmit(data) {
    // console.log('data', data);
    // socket.emit(VERIFY_USER, name, setUser);
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
  return (
    <MobileLayout>
      <Box>
        <Heading
          sx={{
            fontWeight: 'bold',
            fontSize: 5,
            textAlign: 'center',
            my: 5,
          }}
        >
          Rejoindre <br />
          une partie
        </Heading>
        <JoinGame
          onSubmit={onSubmit}
          pseudo={guest.pseudo}
          onClickPseudo={getStupidPseudo}
        />
      </Box>
    </MobileLayout>
  );
}
