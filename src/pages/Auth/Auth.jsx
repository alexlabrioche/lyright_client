import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Text, Box, Button } from 'rebass';
import { Label, Input } from '@rebass/forms';
import { useForm } from 'react-hook-form';
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';
import GoogleButton from 'react-google-button';

import useToggle from '../../hooks/useToggle';
import AppLayout from '../../layouts/AppLayout';
import loginSchema from '../../validations/loginSchema';
import signupSchema from '../../validations/signupSchema';

function Auth() {
  const history = useHistory();
  const firebase = useFirebase();
  const { auth } = useSelector(state => state.firebase);
  const [isFormSignup, toggleFormSignup] = useToggle(false);
  const { register, handleSubmit, errors } = useForm({
    validationSchema: isFormSignup ? signupSchema : loginSchema,
  });

  const isErrorsEmpty = Object.entries(errors).length === 0;

  function loginWithGoogle() {
    firebase.login({ provider: 'google', type: 'popup' });
  }

  function loginWithCredentials({ email, password }) {
    firebase.login({ email, password });
  }

  async function createNewUser({ email, password, username }) {
    firebase.createUser({ email, password }, { displayName: username, email });
  }

  function handleLogin(data) {
    isFormSignup ? createNewUser(data) : loginWithCredentials(data);
  }

  useMemo(() => {
    if (!isEmpty(auth)) {
      history.push('/');
    }
  }, [auth, history]);

  return (
    <AppLayout title={'Salut grand dadet'}>
      <Box width="50%" alignSelf="center" onSubmit={handleSubmit(handleLogin)}>
        <Box
          as="form"
          alignSelf="center"
          onSubmit={handleSubmit(handleLogin)}
          mt={6}
        >
          {isFormSignup && (
            <>
              <Label htmlFor="username" my={3}>
                <Text fontSize={2}>Nom d'utilisateur :</Text>
              </Label>
              <Input
                my={2}
                fontSize={3}
                id="username"
                name="username"
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
                {errors.username && errors.username.message}
              </Text>
            </>
          )}
          <Label htmlFor="email" my={3}>
            <Text fontSize={2}>Email :</Text>
          </Label>
          <Input
            my={2}
            fontSize={3}
            id="email"
            name="email"
            type="text"
            placeholder="john@doe.com"
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

          <Label htmlFor="password" my={3}>
            <Text fontSize={2}>Mot de passe :</Text>
          </Label>
          <Input
            my={2}
            fontSize={3}
            id="password"
            name="password"
            type="password"
            placeholder="********"
            ref={register}
          />
          <Text
            my={2}
            fontSize={2}
            fontWeight="bold"
            textAlign="center"
            color="error"
          >
            {errors.password && errors.password.message}
          </Text>

          {isFormSignup && (
            <>
              <Label htmlFor="passwordConfirmation" my={3}>
                <Text fontSize={2}>Confirmation :</Text>
              </Label>
              <Input
                my={2}
                fontSize={3}
                id="passwordConfirmation"
                name="passwordConfirmation"
                type="password"
                placeholder="********"
                ref={register}
              />
              <Text
                my={2}
                fontSize={2}
                fontWeight="bold"
                textAlign="center"
                color="error"
              >
                {errors.passwordConfirmation &&
                  errors.passwordConfirmation.message}
              </Text>
            </>
          )}

          <Input
            my={4}
            type="submit"
            value={
              !isLoaded(auth)
                ? 'Chargement'
                : isFormSignup
                ? "S'enregistrer"
                : 'Se connecter'
            }
            sx={{
              borderColor: isErrorsEmpty ? 'secondary' : 'error',
              borderWidth: 3,
              fontSize: 3,
            }}
          />
        </Box>
        {isEmpty(auth) && !isFormSignup ? (
          <GoogleButton
            style={{ width: '100%' }}
            type="light"
            label="Se connecter via Google"
            onClick={loginWithGoogle}
          />
        ) : null}
        <Box textAlign="end" my={5}>
          <Button variant="outline" onClick={toggleFormSignup}>
            {isFormSignup ? 'Se connecter ?' : 'Première fois ?'}
          </Button>
        </Box>
      </Box>
    </AppLayout>
  );
}

export default Auth;
