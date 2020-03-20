import React, { useMemo, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Text, Button, Flex, Heading } from 'rebass';

import AppLayout from '../../layouts/AppLayout';
import MobileLayout from '../../layouts/MobileLayout';

import GuessTheLyricsComponent from './components/GuessTheLyrics';
import GuessWhoSangComponent from './components/GuessWhoSang';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_SERVER_BASE_URL;

const isObjectEmpty = obj => !Object.keys(obj).length;

const getApiLyrics = async () => {
  const { data } = await axios.get(`${baseUrl}/api/game/lyrics`);
  return data;
};

const addPlayerScore = (roundData, playerResponse) => {
  const now = Date.now();
  let score = 0;
  if (roundData.song.artistId === playerResponse.id) {
    score = roundData.end - now;
  }
  return score > 0 ? score : 0;
};

export default function InGame({ isMobile }) {
  const game = useSelector(({ game }) => game);
  const { socket } = useSelector(({ socket }) => socket);
  const history = useHistory();
  const params = useParams();

  const [messages, setMessages] = useState([]);
  const [gameData, setGameData] = useState([]);
  const [playersInRoom, setPlayersInRoom] = useState([]);
  const [currentRound, setCurrentRound] = useState({});
  const [isNotAnswered, setIsNotAnswered] = useState(true);
  const [localCurrentScore, setLocalCurrentScore] = useState(0);
  const [isSocketConnected, setIsSocketConnected] = useState(false);

  const Layout = isMobile ? MobileLayout : AppLayout;

  console.log('__REDUX game', game);
  console.log('🧟‍♂️ messages', messages);
  console.log('🧟‍♂️ gameData', gameData);
  console.log('🧟‍♂️ currentRound', currentRound);
  console.log('🧟‍♂️ playersInRoom', playersInRoom);

  useMemo(() => {
    if (params.code !== game.code || isObjectEmpty(socket)) {
      history.push('/');
    }
  }, [socket, game, params, history]);

  useEffect(() => {
    if (!isObjectEmpty(socket) && !isSocketConnected) {
      console.log('🍤 join', socket);
      socket.emit('join', { name: game.pseudo, room: game.code }, () => {});
      setIsSocketConnected(true);
      return () => {
        setIsSocketConnected(false);
        socket.emit('disconnect');
        socket.off();
        console.log('🥣 disconnect Player');
      };
    }
  }, [socket, game]);

  useEffect(() => {
    if (!isObjectEmpty(socket)) {
      socket.on('gameData', newRoundGameData => {
        console.log('🍤 socket on gameData', newRoundGameData);
        setIsNotAnswered(true);
        setCurrentRound(newRoundGameData);
        setGameData([...gameData, newRoundGameData]);
      });
    }
  }, [socket, gameData]);

  useEffect(() => {
    if (!isObjectEmpty(socket)) {
      socket.on('message', newMessage => {
        console.log('🍤 socket on message', newMessage);
        setMessages([...messages, newMessage]);
      });
    }
  }, [socket, messages]);

  useEffect(() => {
    if (!isObjectEmpty(socket)) {
      socket.on('players', players => {
        console.log('🍤 socket on players', players);
        setPlayersInRoom(players);
      });
    }
  }, [socket, playersInRoom]);

  async function startNewRound(event) {
    event.preventDefault();
    const { data } = await getApiLyrics();
    if (data) {
      setCurrentRound(data);
      socket.emit('newRound', data, () => {});
    }
  }

  function sendResponse(artist) {
    console.log('sendResponse', artist);
    const score = addPlayerScore(currentRound, artist);
    console.log('score', score);
    setLocalCurrentScore(score);
    setIsNotAnswered(false);
    socket.emit('updateScore', score, () => {});
  }

  return (
    <Layout>
      <Box>
        {game.host ? (
          <Box>
            <Box my={2}>
              <Heading textAlign="center">Tour {gameData.length} / 10</Heading>
            </Box>
            <Box my={2}>
              {messages.map(({ text }) => (
                <Text my={1}>{text}</Text>
              ))}
            </Box>
            {!isObjectEmpty(currentRound) && (
              <GuessTheLyricsComponent {...currentRound} />
            )}
            <Box my={5}>
              {playersInRoom.map(player => (
                <Flex sx={{ justifyContent: 'space-between', width: '100%' }}>
                  <Text>{player.name}</Text>
                  <Text fontWeight="bold">{player.score}</Text>
                </Flex>
              ))}
            </Box>
            <Flex sx={{ justifyContent: 'center', width: '100%' }}>
              <Button onClick={startNewRound}>
                {gameData.length === 0 ? 'Commencer' : 'Tour Suivant'}
              </Button>
            </Flex>
          </Box>
        ) : (
          <Box>
            {!isObjectEmpty(currentRound) ? (
              isNotAnswered ? (
                <GuessWhoSangComponent
                  {...currentRound}
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
        )}
        {/* <input
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyPress={e => (e.key === 'Enter' ? sendMessage(e) : null)}
        /> */}
      </Box>
    </Layout>
  );
}
