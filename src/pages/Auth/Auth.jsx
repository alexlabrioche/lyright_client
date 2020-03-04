import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, Heading, Box } from 'rebass';
import { Label, Input } from '@rebass/forms';
import { useForm } from 'react-hook-form';

import Loader from '../../components/shared/Loader';
import AppLayout from '../../layouts/AppLayout';
// import { apiRequest } from '../../store/actions/apiRequest';
// import { LOGIN } from '../../store/actions/types';
import loginSchema from '../../validations/loginSchema';
import { useHistory } from 'react-router-dom';
import GoogleButton from 'react-google-button';

import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase';

function Auth() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: loginSchema,
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const firebase = useFirebase();
  const auth = useSelector(state => state.firebase.auth);

  function loginWithGoogle() {
    return firebase.login({ provider: 'google', type: 'popup' });
  }

  const isErrorsEmpty = Object.entries(errors).length === 0;

  function handleLogin(data) {
    console.log('login form data', data);
    // dispatch(
    //   apiRequest(LOGIN, {
    //     verb: 'post',
    //     uri: '/users/login',
    //     data,
    //   }),
    // );
  }

  useMemo(() => {
    if (!isEmpty(auth)) {
      history.push('/');
    }
  }, [auth]);

  return (
    <AppLayout title={'Salut grand dadet'}>
      <Heading textAlign="center" fontSize={5} mb={5}>
        Se connecter
      </Heading>
      <Box width="50%" alignSelf="center" onSubmit={handleSubmit(handleLogin)}>
        {!isLoaded(auth) ? (
          <Loader />
        ) : (
          isEmpty(auth) && (
            <GoogleButton
              type="light"
              label="Login avec Google"
              onClick={loginWithGoogle}
            />
          )
        )}
        <Box as="form" alignSelf="center" onSubmit={handleSubmit(handleLogin)}>
          <Label htmlFor="name" my={3}>
            <Text fontSize={2}>Pseudo :</Text>
          </Label>
          <Input
            my={2}
            fontSize={3}
            id="name"
            name="name"
            type="text"
            placeholder="Ton Pseudo"
            ref={register}
          />
          <Text
            my={2}
            fontSize={2}
            fontWeight="bold"
            textAlign="center"
            color="error"
          >
            {errors.name && errors.name.message}
          </Text>
          <Label htmlFor="email" my={3}>
            <Text fontSize={2}>Code :</Text>
          </Label>
          <Input
            my={2}
            fontSize={3}
            id="email"
            name="email"
            type="email"
            placeholder="johndoe@mail.com"
            ref={register}
          />
          <Text
            my={2}
            fontSize={2}
            fontWeight="bold"
            textAlign="center"
            color="error"
          >
            {errors.email && errors.email.message}
          </Text>

          <Input
            my={4}
            type="submit"
            value="Confirmer"
            sx={{
              borderColor: isErrorsEmpty ? 'accent' : 'error',
              borderWidth: 3,
              fontSize: 3,
            }}
          />
        </Box>
      </Box>
    </AppLayout>
  );
}

export default Auth;
