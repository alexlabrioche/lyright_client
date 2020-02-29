import React from 'react';
import { Heading, Box, Flex, Text } from 'rebass';
import SelectArtist from '../../../components/SelectArtist';

export default function GameSettings({ code, onClick, artists = [] }) {
  return (
    <>
      <Box variant="gamebox">
        <Heading
          fontSize="12vh"
          sx={{ textAlign: 'center', letterSpacing: '2.5rem' }}
        >
          {code}
        </Heading>
        <Text sx={{ textAlign: 'center', fontSize: 3, mt: 3 }}>
          Ramène tes copains et connectez vos smartphone !
        </Text>
      </Box>
      <Flex width={1} my={4}>
        <SelectArtist onClick={onClick} artists={artists} width="50%" mx={3} />
        <SelectArtist onClick={onClick} artists={artists} width="50%" mx={3} />
        {artists.length === 2 && 'READY 4 STUPIDITY'}
      </Flex>
    </>
  );
}
