import React from 'react';
import { Box, Text, Button, Flex, Heading } from 'rebass';

export default function DesktopGame({ players, gameData, nextRound }) {
  const currentRound = gameData[gameData.length - 1];
  return (
    <Flex
      sx={{
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box my={2}>
        <Heading textAlign="center">Tour {gameData.length} / 10</Heading>
      </Box>

      <Box my={2}>
        <Box my={5} textAlign="center">
          {gameData.length > 0
            ? currentRound.song.lyrics.map((lyric, i) => (
                <Text my={2} key={i} fontSize={4}>
                  {lyric}
                </Text>
              ))
            : null}
        </Box>
      </Box>

      <Box height="100%" width="100%" textAlign="right">
        {players.every(player => player.sendAnswer) && (
          <Button onClick={nextRound}>Prochain Tour</Button>
        )}
      </Box>

      <Box width="100%">
        {players
          .sort((a, b) => b.score - a.score)
          .map(player => (
            <Flex sx={{ justifyContent: 'space-between', width: '100%' }}>
              <Text>{player.name}</Text>
              <Text fontWeight="bold">{player.score}</Text>
            </Flex>
          ))}
      </Box>
    </Flex>
  );
}
