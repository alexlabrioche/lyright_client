import React from 'react';
import AppLayout from '../../layouts/AppLayout';
import { Heading, Box, Button } from 'rebass';

function Auth() {
  return (
    <AppLayout title={'Salut grand dadet'}>
      <Heading fontSize={[3, 5]}>On va dire que t'es connecté hein...</Heading>
      <Box mt={6}>
        <Button>Commencer une partie</Button>
      </Box>
    </AppLayout>
  );
}

export default Auth;
