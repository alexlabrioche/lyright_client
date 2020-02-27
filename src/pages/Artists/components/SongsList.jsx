import React from 'react';
import { Flex, Box, Text } from 'rebass';

function SongCard({ title, id, onClick }) {
  return (
    <Box p={3} width={[1, 1 / 2, 1 / 3, 1 / 4]}>
      <Box
        bg="white"
        sx={{
          borderRadius: '1rem',
          boxShadow: '5px 5px 7px 0px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.2)',
          },
          cursor: 'pointer',
        }}
        onClick={() => onClick(id)}
      >
        <Text
          p={3}
          fontSize={2}
          textAlign="center"
          sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
        >
          {title}
        </Text>
      </Box>
    </Box>
  );
}

export default function SongsList({ songs, onClick }) {
  return (
    <Flex flexWrap="wrap" mx={-2}>
      {songs.map(song => (
        <SongCard {...song} onClick={onClick} />
      ))}
    </Flex>
  );
}
