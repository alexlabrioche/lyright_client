import React from 'react';
import { Heading, Box, Text, Button, Flex } from 'rebass';

export default function GameSettings({ game = { code: '' }, start }) {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        flexGrow: 1,
      }}
    >
      <Box variant="gamebox">
        <Heading
          fontSize="12vh"
          sx={{ textAlign: 'center', letterSpacing: '2.5rem' }}
        >
          {game.code}
        </Heading>
        <Text sx={{ textAlign: 'center', fontSize: 3, mt: 3 }}>
          Ramène tes copains et connectez vos smartphone !
        </Text>
      </Box>
      <Box my={3} height="100%">
        <Heading>Joueurs connectés :</Heading>
        {game.players.map(player => (
          <Text>{player.name}</Text>
        ))}
      </Box>
      <Button my={3} onClick={start}>
        <Text>GO !</Text>
      </Button>
    </Flex>
  );
}
