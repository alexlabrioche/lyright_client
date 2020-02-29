import React from 'react';
import { useSelector } from 'react-redux';
import { Heading } from 'rebass';
import AppLayout from '../../layouts/AppLayout';

export default function UserSpace() {
  const { connected } = useSelector(({ user }) => user);

  return (
    <AppLayout title={'Accueil'}>
      <Heading fontSize={[4, 5]}>Salut {connected.name}</Heading>
    </AppLayout>
  );
}
