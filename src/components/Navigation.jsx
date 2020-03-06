import React from 'react';
import { Heading, Flex, Button, Box, Image, Text } from 'rebass';
import { useSelector } from 'react-redux';
import { isEmpty } from 'react-redux-firebase';

import useHover from '../hooks/useHover';
import Link from './shared/Link';
import useMobileDevice from '../hooks/useMobileDevice';
import { useLocation } from 'react-router-dom';

import {
  HOME_ROUTE,
  ARTISTS_ROUTE,
  SETUP_GAME_ROUTE,
  USER_SPACE_ROUTE,
  AUTH_ROUTE,
} from '../router/constants';

function Navigation() {
  const location = useLocation();
  const [isMobile] = useMobileDevice();
  const [hoverRef, isHovered] = useHover();
  const auth = useSelector(({ firebase }) => firebase.auth);

  return (
    <Flex variant="nav">
      <Heading p={2} fontSize={[4, 5]}>
        <Link to={HOME_ROUTE}>Lyright</Link>
      </Heading>
      <Box mx="auto" />
      <Link to={ARTISTS_ROUTE} mr={[3, 4]}>
        Artistes
      </Link>
      {!isMobile && !isEmpty(auth) ? (
        <Link to={SETUP_GAME_ROUTE} mr={[2, 3]}>
          Jouer
        </Link>
      ) : null}
      {!isMobile ? (
        !isEmpty(auth) ? (
          <Flex width={256} height="3rem" justifyContent="end" ref={hoverRef}>
            {isHovered ? (
              <Button variant="primary">
                <Link to={USER_SPACE_ROUTE}>Espace Personnel</Link>
              </Button>
            ) : (
              <Flex alignItems="center" justifyContent="end">
                <Text mr={3}>Salut {auth.displayName} !</Text>
                <Image src={auth.photoURL} variant="avatar" />
              </Flex>
            )}
          </Flex>
        ) : location.pathname !== AUTH_ROUTE ? (
          <Button variant={'secondary'}>
            <Link to={AUTH_ROUTE}>Se connecter</Link>
          </Button>
        ) : null
      ) : null}
    </Flex>
  );
}

export default Navigation;
