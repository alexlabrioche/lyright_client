import React from 'react';
import { Heading, Button, Flex } from 'rebass';
import Link from '../../components/shared/Link';

import AppLayout from '../../layouts/AppLayout';

function Home() {
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
        <Heading fontSize={[3, 4, 6]} mb={5}>
          Lyright c'est le lol !
        </Heading>
        <Button fontSize={[2, 3]}>
          <Link to="/jouer">Jouer</Link>
        </Button>
      </Flex>
    </AppLayout>
  );
}

export default Home;
