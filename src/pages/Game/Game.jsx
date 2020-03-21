import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { apiRequest } from '../../store/actions/apiRequest';
import { NEW_GAME } from '../../store/actions/types';

import AppLayout from '../../layouts/AppLayout';
import { initSocketIo } from '../../store/actions/socketio';

import InitializeGameComponent from './components/InitializeGame';
import DesktopGameComponent from './components/DesktopGame';

const baseUrl = process.env.REACT_APP_SERVER_BASE_URL;

const isObjectEmpty = obj => !Object.keys(obj).length;

const getApiLyrics = async () => {
  const { data } = await axios.get(`${baseUrl}/api/game/lyrics`);
  return data;
};

function Game() {
  const dispatch = useDispatch();
  const game = useSelector(({ game }) => game);
  const socket = useSelector(({ socket }) => socket.socket);

  const [messages, setMessages] = useState([]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [playersInRoom, setPlayersInRoom] = useState([]);
  const [gameData, setGameData] = useState([]);

  console.log('🔥 gameData', gameData);
  console.log('🔥 playersInRoom', playersInRoom);

  useEffect(() => {
    dispatch(initSocketIo());
    dispatch(
      apiRequest(NEW_GAME, {
        verb: 'get',
        uri: '/game/new',
      }),
    );
  }, []);

  async function startNewRound() {
    const { data } = await getApiLyrics();
    if (data) {
      setGameData(s => [...s, data]);
      socket.emit('newRound', data, () => {});
    }
  }

  useEffect(() => {
    if (!isObjectEmpty(socket)) {
      if (game.code) {
        console.log('🚗 join');
        socket.emit(
          'join',
          { name: game.pseudo, room: game.code, isHost: true },
          () => {},
        );
      }
    }
  }, [socket, game.code]);

  useEffect(() => {
    if (!isObjectEmpty(socket)) {
      socket.on('message', newMessage => {
        console.log('🚗 message');
        setMessages([...messages, newMessage]);
      });
      socket.on('players', players => {
        console.log('🚗 players');
        setPlayersInRoom(players);
      });
    }
  }, [socket, messages, playersInRoom]);

  function startGame() {
    setIsGameStarted(true);
    startNewRound();
  }

  return (
    <AppLayout title="Jouer">
      {game.isInitialized ? (
        isGameStarted ? (
          <DesktopGameComponent
            players={playersInRoom}
            gameData={gameData}
            nextRound={startNewRound}
          />
        ) : (
          <InitializeGameComponent
            messages={messages}
            startGame={startGame}
            game={game}
          />
        )
      ) : (
        'Chargement...'
      )}
    </AppLayout>
  );
}

export default Game;
