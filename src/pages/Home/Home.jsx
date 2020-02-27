import React from 'react';
import { Heading, Text, Flex } from 'rebass';
import AppLayout from '../../layouts/AppLayout';
import useMobileDevice from '../../hooks/useMobileDevice';

import JoinGame from './components/JoinGame';

function Home() {
  const [isMobile] = useMobileDevice();

  function onSubmit(data) {
    console.log('data', data);
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
        <Heading fontSize={[3, 4, 6]}>Lyright c'est le lol !</Heading>

        {isMobile ? (
          <>
            <JoinGame onSubmit={onSubmit} />
          </>
        ) : (
          <Text>Connectes toi pour en savoir plus</Text>
        )}
      </Flex>
    </AppLayout>
  );
}

export default Home;
