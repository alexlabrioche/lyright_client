import React from 'react';
import { Box, Text } from 'rebass';
import { Label, Input } from '@rebass/forms';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  secretCode: yup
    .string()
    .length(5, 'Le code secret doit faire 5 charactères')
    .matches(/^[a-zA-Z0-9]*$/, 'Uniquement alpha Numérique')
    .required('Le champs est requis'),
});

export default function JoinGame({ onSubmit }) {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });
  return (
    <Box as="form" width="100%" onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="secretCode" my={3}>
        <Text fontWeight="bold" fontSize={3}>
          Rejoindre une partie :
        </Text>
      </Label>
      <Input
        my={4}
        fontSize={3}
        id="secretCode"
        name="secretCode"
        type="text"
        placeholder="m4kh0"
        ref={register}
      />
      <Input
        my={4}
        type="submit"
        value="C'est parti frérot"
        sx={{
          borderColor: errors.secretCode ? 'error' : 'accent',
          borderWidth: 3,
          fontSize: 3,
        }}
      />
      <Text
        my={4}
        fontSize={2}
        fontWeight="bold"
        textAlign="center"
        color={errors.secretCode ? 'error' : 'primaryDarker'}
      >
        {errors.secretCode ? errors.secretCode.message : 'ok'}
      </Text>
    </Box>
  );
}
