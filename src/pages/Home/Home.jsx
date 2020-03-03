import React from 'react';
import { useSelector } from 'react-redux';
import { Heading, Text, Flex } from 'rebass';

import useMobileDevice from '../../hooks/useMobileDevice';
import AppLayout from '../../layouts/AppLayout';
import Mobile from './components/Mobile';

function Home() {
  const [isMobile] = useMobileDevice();
  const { isAuth, connected } = useSelector(({ user }) => user);

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
          <Mobile />
        ) : (
          <>
            <Heading fontSize={[3, 4, 6]}>Lyright c'est le lol !</Heading>
            <Text fontSize={[2, 3]}>
              {isAuth
                ? `Salut ${connected.name} !`
                : 'Connecte toi pour en savoir plus'}
            </Text>
          </>
        )}
      </Flex>
    </AppLayout>
  );
}

export default Home;
