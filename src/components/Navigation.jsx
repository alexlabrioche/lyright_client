import React from 'react';
import { Heading, Flex, Button, Box } from 'rebass';
import { useSelector } from 'react-redux';

import useHover from '../hooks/useHover';
import Link from './shared/Link';
import useMobileDevice from '../hooks/useMobileDevice';

function Navigation() {
  const [hoverRef, isHovered] = useHover();

  const [isMobile] = useMobileDevice();
  const { isAuth, connected } = useSelector(({ user }) => user);

  return (
    <Flex variant="nav">
      <Heading p={2} fontSize={[4, 5]}>
        <Link to="/">Lyright</Link>
      </Heading>
      <Box mx="auto" />
      <Link to="/artistes" mr={[3, 4]}>
        Artistes
      </Link>
      {!isMobile && isAuth ? (
        <Link to="/jouer" mr={[3, 4]}>
          Jouer
        </Link>
      ) : null}
      {isMobile ? null : connected.id ? (
        <Flex width={256} justifyContent="end">
          <Button variant={isHovered ? 'primary' : 'outline'} ref={hoverRef}>
            <Link to="/espace-perso">
              {isHovered ? 'Espace Personnel' : `Salut ${connected.name} !`}
            </Link>
          </Button>
        </Flex>
      ) : (
        <Button variant={isAuth ? 'primary' : 'secondary'}>
          <Link to="/connexion">Se connecter</Link>
        </Button>
      )}
    </Flex>
  );
}

export default Navigation;
