import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Heading, Text, Flex, Box, Button } from 'rebass';
import { apiRequest } from '../../actions/apiRequest';
import { PSEUDO } from '../../actions/types';

import useMobileDevice from '../../hooks/useMobileDevice';
import AppLayout from '../../layouts/AppLayout';
import JoinGame from './components/JoinGame';

function Home() {
  const [isMobile] = useMobileDevice();
  const dispatch = useDispatch();
  const { loading } = useSelector(({ api }) => api);
  const { guest } = useSelector(({ user }) => user);

  function onSubmit(data) {
    console.log('data', data);
  }

  function getStupidPseudo() {
    dispatch(apiRequest(PSEUDO, '/game/pseudo'));
  }

  return (
    <AppLayout title={'Accueil'}>
      <Flex
        sx={{
          flexGrow: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        {isMobile ? (
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
            <JoinGame onSubmit={onSubmit} pseudo={guest.pseudo} />
            <Button variant="secondary" width="100%" onClick={getStupidPseudo}>
              En manque d'inspiration ?
            </Button>
          </Box>
        ) : (
          <>
            <Heading fontSize={[3, 4, 6]}>Lyright c'est le lol !</Heading>
            <Text>Connectes toi pour en savoir plus</Text>
          </>
        )}
      </Flex>
    </AppLayout>
  );
}

export default Home;
