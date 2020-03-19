import React, { useMemo, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from 'rebass';

import AppLayout from '../../layouts/AppLayout';
import MobileLayout from '../../layouts/MobileLayout';

export default function InGame({ isMobile }) {
  const game = useSelector(({ game }) => game);
  const { socket } = useSelector(({ socket }) => socket);

  const history = useHistory();
  const params = useParams();
  const Layout = isMobile ? MobileLayout : AppLayout;

  useMemo(() => {
    if (params.code !== game.code) {
      history.push('/');
    }
  }, [game, params, history]);

  useEffect(() => {
    console.log('🍤 IO ON', socket);
    socket.emit(
      'USER_CONNECTED',
      { name: game.pseudo, room: game.code },
      () => {},
    );
    return () => {
      socket.emit('disconnect');
      socket.off();
      console.log('🥣 IO OFF');
    };
  }, [socket, game]);

  return (
    <Layout>
      <Box height="100%" bg="lightblue">
        zer
      </Box>
    </Layout>
  );
}
