import React from 'react';
import { Heading, Box, Text, Button, Flex } from 'rebass';

export default function InitializeGame({ startGame, game, messages }) {
  return (
    <Flex
      sx={{
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
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
      <Box mt={5}>
        {messages.map(({ text }, i) => (
          <Text key={i} my={1}>
            {text}
          </Text>
        ))}
      </Box>
      <Button mt={5} fontSize={4} variant="secondary" onClick={startGame}>
        Tout le monde est là ?
      </Button>
    </Flex>
  );
}
