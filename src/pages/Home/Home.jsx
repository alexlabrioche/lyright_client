import React from 'react';
import { Heading } from 'rebass';
import AppLayout from '../../layouts/AppLayout';

function Home() {
  return (
    <AppLayout title={'Accueil'}>
      <Heading>Hello from home</Heading>
    </AppLayout>
  );
}

export default Home;
