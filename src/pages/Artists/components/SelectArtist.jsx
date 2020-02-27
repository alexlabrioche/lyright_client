import React from 'react';
import { Flex, Box, Heading } from 'rebass';
import { Label, Select } from '@rebass/forms';

export default function SelectArtist({ artists = [], onClick, artistName }) {
  return (
    <Flex
      width={1}
      sx={{
        flexDirection: ['column', 'row'],
      }}
    >
      <Box width={['100%', '20rem']} py={[2, 4]}>
        <Select
          id="artist"
          name="artist"
          sx={{
            borderColor: 'accent',
            fontSize: 4,
            py: 3,
            px: 4,
            borderWidth: 3,
          }}
        >
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
