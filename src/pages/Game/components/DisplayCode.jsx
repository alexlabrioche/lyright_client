import React from 'react';
import { Heading, Box } from 'rebass';

export default function DisplayCode({ code }) {
  return (
    <Box variant="elevated" sx={{ p: '2rem', backgroundColor: 'white' }}>
      <Heading
        fontSize="15vh"
        sx={{ textAlign: 'center', letterSpacing: '2rem' }}
      >
        {code}
      </Heading>
    </Box>
  );
}
