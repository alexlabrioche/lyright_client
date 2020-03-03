import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Heading, Box, Button } from 'rebass';

import { apiRequest } from '../../../actions/apiRequest';
import { PSEUDO } from '../../../actions/types';
import JoinGame from './JoinGame';

export default function Mobile({ onSubmit, getStupidPseudo }) {
  const { guest } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  function onSubmit(data) {
    console.log('data', data);
    // socket.emit(VERIFY_USER, name, setUser);
  }

  function getStupidPseudo() {
    dispatch(
      apiRequest(PSEUDO, {
        verb: 'get',
        uri: '/game/pseudo',
      }),
    );
  }
  return (
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
      <Button variant="secondary" width="100%" onClick={getStupidPseudo}>
        En manque d'inspiration ?
      </Button>
      <JoinGame onSubmit={onSubmit} pseudo={guest.pseudo} />
    </Box>
  );
}
