import React from 'react';
import { Box, Heading, Text, Button, Flex } from 'rebass';

export default function GuessWhoSang({ artists, sendResponse }) {
  return (
    <Flex
      my={5}
      width="100%"
      sx={{
        justifyContent: 'space-around',
        flexDirection: 'column',
        flexGrow: 1,
      }}
    >
      {artists.map((artist, i) => (
        <Box onClick={() => sendResponse(artist)}>
          <Box
            key={i}
            bg={i === 0 ? 'accent' : 'secondary'}
            p={5}
            m={2}
            sx={{ borderRadius: '0.5rem' }}
          >
            <Heading color="white" textAlign="center">
              <Box>{artist.name}</Box>
            </Heading>
          </Box>
        </Box>
      ))}
    </Flex>
  );
}
