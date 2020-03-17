import React from 'react';
import { Box } from 'rebass';
import { Select } from '@rebass/forms';

export default function SelectArtist({ artists = [], handleArtist, ...rest }) {
  return (
    <Box {...rest}>
      <Select
        id="artists"
        name="artists"
        sx={{
          borderColor: 'accent',
          fontSize: 4,
          py: 3,
          px: 4,
          borderWidth: 3,
        }}
        onChange={handleArtist}
      >
        <option key={0}>Choisis un artiste !</option>
        {artists.map(({ name, id }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </Select>
    </Box>
  );
}
