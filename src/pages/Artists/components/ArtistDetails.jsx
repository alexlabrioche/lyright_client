import React from 'react';
import { Box, Flex, Text } from 'rebass';

export default function ArtistDetails({ name, born, birthname }) {
  return (
    <Box py={5}>
      <Flex flexWrap="wrap" mx={-2}>
        <Box px={2} py={2} width={1 / 2}>
          <Text p={1}>{birthname && `Nom de naissance : ${birthname}`}</Text>
        </Box>
        <Box px={2} py={2} width={1 / 2}>
          <Text p={1}>{born && `Né(e) le : ${born}`}</Text>
        </Box>
      </Flex>
    </Box>
  );
}
