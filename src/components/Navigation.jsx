import React from 'react';
import { Heading, Flex, Button, Box } from 'rebass';
import Link from './shared/Link';

function Navigation() {
  return (
    <Flex variant="nav">
      <Heading p={2} fontSize={[4, 5]}>
        <Link to="/">Lyright</Link>
      </Heading>
      <Box mx="auto" />
      <Link to="/artistes">Artistes</Link>
      <Button variant="secondary" mx={2}>
        <Link to="/connexion">Se connecter</Link>
      </Button>
    </Flex>
  );
}

export default Navigation;
