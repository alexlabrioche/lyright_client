import React, { useMemo, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Text } from 'rebass';

import MobileLayout from '../../layouts/MobileLayout';

import GuessWhoSangComponent from './components/GuessWhoSang';

const isObjectEmpty = obj => !Object.keys(obj).length;

const addPlayerScore = (roundData, playerResponse) => {
  const now = Date.now();
  let score = 0;
  if (roundData.song.artistId === playerResponse.id) {
    score = roundData.end - now;
  }
  return score > 0 ? score : 0;
};

export default function InGame() {
  const game = useSelector(({ game }) => game);
  const { socket } = useSelector(({ socket }) => socket);
  const history = useHistory();
  const params = useParams();

  const [gameData, setGameData] = useState([]);
  const [isNotAnswered, setIsNotAnswered] = useState(true);
  const [localCurrentScore, setLocalCurrentScore] = useState(0);
  const [isSocketConnected, setIsSocketConnected] = useState(false);

  useMemo(() => {
    if (params.code !== game.code || isObjectEmpty(socket)) {
      history.push('/');
    }
  }, [socket, game, params, history]);

  useEffect(() => {
    if (!isObjectEmpty(socket) && !isSocketConnected) {
      console.log('🥣 join');
      socket.emit('join', { name: game.pseudo, room: game.code }, () => {});
      setIsSocketConnected(true);
      return () => {
        setIsSocketConnected(false);
        socket.emit('disconnect');
        socket.off();
        console.log('🥣 disconnect');
      };
    }
  }, [socket, game]);

  useEffect(() => {
    if (!isObjectEmpty(socket)) {
      socket.on('gameData', newRoundGameData => {
        console.log('🥣 gameData');
        setIsNotAnswered(true);
        setGameData([...gameData, newRoundGameData]);
      });
    }
  }, [socket, gameData]);

  function sendResponse(artist) {
    const score = addPlayerScore(gameData[gameData.length - 1], artist);
    socket.emit('updateScore', score, () => {});
    setLocalCurrentScore(score);
    setIsNotAnswered(false);
  }

  const artists =
    gameData.length > 0 ? gameData[gameData.length - 1].artists : null;

  return (
    <MobileLayout>
      <Box>
        {gameData.length > 0 ? (
          isNotAnswered ? (
            <GuessWhoSangComponent
              artists={artists}
              sendResponse={sendResponse}
            />
          ) : (
            <Text my={5} fontSize={4} textAlign="center">
              Réponse validée
              <br />
              <br />
              score : {localCurrentScore}
            </Text>
          )
        ) : (
          <Text my={5} fontSize={4} textAlign="center">
            En attente...
          </Text>
        )}
      </Box>
    </MobileLayout>
  );
}
