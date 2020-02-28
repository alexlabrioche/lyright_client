import React from 'react';
import { Box } from 'rebass';
import { Select } from '@rebass/forms';

export default function SelectArtist({ artists = [], onClick, ...rest }) {
  return (
    <Box {...rest}>
      <Select
        id={'artist'}
        name={'artist'}
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
          <option key={id} onClick={() => onClick(id)}>
            {name}
          </option>
        ))}
      </Select>
    </Box>
  );
}
