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
      <Link to="/artistes" mr={2}>
        Artistes
      </Link>

      {!isMobile ? (
        <Button variant="secondary" mx={2}>
          <Link to="/connexion">Se connecter</Link>
        </Button>
      ) : null}
    </Flex>
  );
}

export default Navigation;
