import React from 'react';
import { Box, Heading, Text } from 'rebass';

export default function SongDetails({ song }) {
  const lyricsArr = song.lyrics.split('\n');
  return (
    <Box>
      <Heading fontSize={[4, 5, 6, 6]} mb={4}>
        {song.title}
      </Heading>
      {lyricsArr.map(line => (
        <Text fontSize={3} my={2}>
          {line}
        </Text>
      ))}
    </Box>
  );
}
