import React, { useMemo } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AppLayout from '../../layouts/AppLayout';

export default function InGame() {
  const game = useSelector(({ game }) => game);
  const history = useHistory();
  const params = useParams();

  useMemo(() => {
    if (params.code !== game.code) {
      history.push('/');
    }
  }, [game, params]);

  return <AppLayout>InGame</AppLayout>;
}
