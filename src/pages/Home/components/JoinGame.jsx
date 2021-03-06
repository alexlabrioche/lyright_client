import React from 'react';
import { Box, Text } from 'rebass';
import { Label, Input } from '@rebass/forms';
import { useForm } from 'react-hook-form';
import joinGameSchema from '../../../validations/joinGameSchema';

export default function JoinGame({ onSubmit, pseudo }) {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: joinGameSchema,
  });
  const isErrorsEmpty = Object.entries(errors).length === 0;
  return (
    <Box as="form" width="100%" onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="pseudo" my={3}>
        <Text fontSize={2}>Pseudo :</Text>
      </Label>
      <Input
        my={2}
        fontSize={3}
        id="pseudo"
        name="pseudo"
        type="text"
        placeholder="Ton Pseudo"
        value={pseudo}
        ref={register}
      />
      <Text
        my={2}
        fontSize={2}
        fontWeight="bold"
        textAlign="center"
        color="error"
      >
        {errors.pseudo && errors.pseudo.message}
      </Text>
      <Label htmlFor="code" my={3}>
        <Text fontSize={2}>Code :</Text>
      </Label>
      <Input
        my={2}
        fontSize={3}
        id="code"
        name="code"
        type="text"
        placeholder="m4kh0"
        ref={register}
      />
      <Text
        my={2}
        fontSize={2}
        fontWeight="bold"
        textAlign="center"
        color="error"
      >
        {errors.code && errors.code.message}
      </Text>
      <Input
        my={4}
        type="submit"
        value="C'est parti frérot"
        sx={{
          borderColor: isErrorsEmpty ? 'accent' : 'error',
          borderWidth: 3,
          fontSize: 3,
        }}
      />
    </Box>
  );
}
