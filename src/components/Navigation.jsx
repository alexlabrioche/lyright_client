import React from 'react';
import { Heading, Flex, Button, Box } from 'rebass';

import Link from './shared/Link';
import useMobileDevice from '../hooks/useMobileDevice';
import { useSelector } from 'react-redux';

function Navigation() {
  const [isMobile] = useMobileDevice();

  const { isAuth, connected } = useSelector(({ user }) => user);

  return (
    <Flex variant="nav">
      <Heading p={2} fontSize={[4, 5]}>
        <Link to="/">Lyright</Link>
      </Heading>
      <Box mx="auto" />
      {!isMobile && isAuth ? (
        <Link to="/jouer" mr={[3, 4]}>
          Jouer
        </Link>
      ) : null}
      <Link to="/artistes" mr={[3, 4]}>
        Artistes
      </Link>
      {isMobile ? null : connected.id ? (
        <Button variant="outline">
          <Link to="/espace-perso">{connected.name}</Link>
        </Button>
      ) : (
        <Button variant={isAuth ? 'primary' : 'secondary'}>
          <Link to="/connexion">Se connecter</Link>
        </Button>
      )}
    </Flex>
  );
}

export default Navigation;
