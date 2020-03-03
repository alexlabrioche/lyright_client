import React from 'react';
import { Heading, Box, Flex, Text, Button } from 'rebass';
import SelectArtist from '../../../components/SelectArtist';

export default function GameSettings({
  game = { code: '' },
  onClick,
  artists = [],
  start,
}) {
  return (
    <Flex flexDirection="column" flexGrow={1}>
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
      <Flex width={1} my={4}>
        <SelectArtist onClick={onClick} artists={artists} width="50%" mx={3} />
        <SelectArtist onClick={onClick} artists={artists} width="50%" mx={3} />
      </Flex>
      <Box p="auto" m="auto">
        {game.players.map(player => (
          <Heading>{player.name}</Heading>
        ))}
      </Box>
      {game.artists.length === 2 && (
        <Button onClick={start}>
          <Text>GO !</Text>
        </Button>
      )}
    </Flex>
  );
}
