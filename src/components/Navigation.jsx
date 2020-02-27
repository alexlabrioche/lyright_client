import React from 'react';
import { Heading, Flex, Button, Box } from 'rebass';
import Link from './shared/Link';
import useMobileDevice from '../hooks/useMobileDevice';

function Navigation() {
  const [isMobile] = useMobileDevice();
  return (
    <Flex variant="nav">
      <Heading p={2} fontSize={[4, 5]}>
        <Link to="/">Lyright</Link>
      </Heading>
      <Box mx="auto" />
      {!isMobile ? (
        <Link to="/jouer" mr={[3, 4]}>
          Jouer
        </Link>
      ) : null}
      <Link to="/artistes" mr={[3, 4]}>
        Artistes
      </Link>

      {!isMobile ? (
        <Button variant="secondary" mx={[3, 4]}>
          <Link to="/connexion">Se connecter</Link>
        </Button>
      ) : null}
    </Flex>
  );
}

export default Navigation;
