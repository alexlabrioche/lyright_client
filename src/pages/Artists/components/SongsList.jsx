import React from 'react';
import { Box, Flex, Text } from 'rebass';

function SongItem({ title }) {
  return (
    <Box px={3} py={3} width={[1, 1 / 2, 1 / 3, 1 / 4]}>
      <Text p={3} bg="primaryDark" textAlign="center">
        {title}
      </Text>
    </Box>
  );
}

export default function SongsList({ songs }) {
  return (
    <Flex flexWrap="wrap" mx={-2}>
      {songs.map(song => (
        <SongItem {...song} />
      ))}
    </Flex>
  );
}
