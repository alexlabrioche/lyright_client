import React from 'react';
import { Heading, Box, Text, Button, Flex } from 'rebass';
import { Label, Select } from '@rebass/forms';

export default function GameSettings({ game = { code: '' }, start }) {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        flexGrow: 1,
      }}
    >
      <Box variant="gamebox">
        <Heading
          fontSize="12vh"
          sx={{ textAlign: 'center', letterSpacing: '2.5rem' }}
        >
          {game.code}
        </Heading>
        <Text sx={{ textAlign: 'center', fontSize: 3, mt: 3 }}>
          Ramène tes copains et connectez vos smartphone !
        </Text>
      </Box>
      <Box my={3} height="100%">
        <Heading my={2} fontSize={4} textAlign="center">
          Nombre de joueurs :
        </Heading>
        {/* <Button onClick={()}>Entrainement</Button> */}

        {/* <Label htmlFor="players">Country</Label>
        <Select id="country" name="country" defaultValue="United States">
          {Object.entries(props.countries).map(([key, country]) => (
            <option key={key}>{country.name}</option>
          ))}
        </Select> */}
      </Box>
      <Button my={3} onClick={start}>
        <Text>GO !</Text>
      </Button>
    </Flex>
  );
}
