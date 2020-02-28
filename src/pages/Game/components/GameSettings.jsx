import React from 'react';
import { Heading, Box, Flex, Text } from 'rebass';
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
        <Text sx={{ textAlign: 'center', fontSize: 3, mt: 3 }}>
          Ramènes tes copains et connectez vous grâce à ce code !
        </Text>
      </Box>
      <Flex width={1} my={4}>
        <SelectArtist onClick={onClick} artists={artists} width="50%" mx={3} />
        <SelectArtist onClick={onClick} artists={artists} width="50%" mx={3} />
        {artists.length === 2 && 'READY TO STUPIDITYZ'}
      </Flex>
    </>
  );
}
