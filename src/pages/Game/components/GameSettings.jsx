import React from 'react';
import { Heading, Box, Flex } from 'rebass';
import SelectArtist from '../../../components/SelectArtist';

export default function GameSettings({ code, onClick, artists = [] }) {
  return (
    <>
      <Box
        sx={{
          p: '2rem',
          backgroundColor: 'white',
          borderRadius: '2rem',
          boxShadow: '10px 10px 8px 0px rgba(0,0,0,0.1)',
        }}
      >
        <Heading
          fontSize="12vh"
          sx={{ textAlign: 'center', letterSpacing: '2.5rem' }}
        >
          {code}
        </Heading>
      </Box>
      <Flex width={1} my={4}>
        <SelectArtist onClick={onClick} artists={artists} width="50%" mx={3} />
        <SelectArtist onClick={onClick} artists={artists} width="50%" mx={3} />
      </Flex>
    </>
  );
}
