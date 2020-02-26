import React from 'react';
import { Flex, Box, Heading } from 'rebass';
import { Label, Select } from '@rebass/forms';

export default function SelectArtists({ artists = [], onClick, artistName }) {
  return (
    <Flex
      width={1}
      sx={{
        flexDirection: ['column', 'row'],
      }}
    >
      <Label
        py={[2, 4]}
        htmlFor="artist"
        sx={{ justifyContent: ['center', 'left'] }}
      >
        <Heading fontSize={[4, 5]}>
          {artistName ? artistName : 'Artistes :'}
        </Heading>
      </Label>
      <Box width={['100%', '20rem']} py={[2, 4]}>
        <Select id="artist" name="artist" sx={{ borderColor: 'accent' }}>
          <option key={0} onClick={() => onClick({ id: 0, name: null })}>
            Choisis un artiste !
          </option>
          {artists.map(({ name, id }) => (
            <option key={id} onClick={() => onClick({ id, name })}>
              {name}
            </option>
          ))}
        </Select>
      </Box>
    </Flex>
  );
}
