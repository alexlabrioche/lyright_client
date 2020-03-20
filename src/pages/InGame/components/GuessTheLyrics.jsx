import React from 'react';
import styled from 'styled-components';
import { Box, Heading, Text, Button, Flex } from 'rebass';

// const LyricsBox = styled(Box)`
//   background-color: lightcyan;
// `;
// song: {lyrics: Array(2), title: "Il Faut Saisir Sa Chance", id: "bec57873-0d62-4215-a8cb-cf4991056eb6", artist: "Johnny Hallyday", artistId: "987db0d1-6d37-4928-becf-97ed0069e33a"}
// artists: (2) [{…}, {…}]
export default function GuessTheLyrics({ song: { lyrics }, artists }) {
  return (
    <Box my={2}>
      <Box my={5} textAlign="center">
        {lyrics.map((lyric, i) => (
          <Text key={i} fontSize={3}>
            {lyric}
          </Text>
        ))}
      </Box>
      {/* <Flex my={5} width="100%" sx={{ justifyContent: 'space-around' }}>
        {artists.map((artist, i) => (
          <Box
            key={i}
            bg={i === 0 ? 'accent' : 'secondary'}
            p={4}
            sx={{ borderRadius: '0.5rem' }}
          >
            <Heading color="white">{artist.name}</Heading>
          </Box>
        ))}
      </Flex> */}
    </Box>
  );
}
