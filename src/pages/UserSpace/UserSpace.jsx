import React from 'react';
import { useSelector } from 'react-redux';
import { Heading, Button } from 'rebass';
import AppLayout from '../../layouts/AppLayout';
import { useFirebase } from 'react-redux-firebase';

export default function UserSpace() {
  const { auth } = useSelector(({ firebase }) => firebase);
  const firebase = useFirebase();

  return (
    <AppLayout title={'Accueil'}>
      <Heading fontSize={[4, 5]}>Salut {auth.displayName}</Heading>
      <Button onClick={firebase.logout}>Se déconnecter</Button>
    </AppLayout>
  );
}
