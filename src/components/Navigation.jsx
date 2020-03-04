import React from 'react';
import { Heading, Flex, Button, Box } from 'rebass';
import { useSelector } from 'react-redux';
import { isEmpty } from 'react-redux-firebase';

import useHover from '../hooks/useHover';
import Link from './shared/Link';
import useMobileDevice from '../hooks/useMobileDevice';

function Navigation() {
  const [isMobile] = useMobileDevice();
  const [hoverRef, isHovered] = useHover();
  const { auth } = useSelector(({ firebase }) => firebase);

  return (
    <Flex variant="nav">
      <Heading p={2} fontSize={[4, 5]}>
        <Link to="/">Lyright</Link>
      </Heading>
      <Box mx="auto" />
      <Link to="/artistes" mr={[3, 4]}>
        Artistes
      </Link>
      {!isMobile && !isEmpty(auth) ? (
        <Link to="/jouer" mr={[2, 3]}>
          Jouer
        </Link>
      ) : null}
      {!isMobile ? (
        !isEmpty(auth) ? (
          <Flex width={256} justifyContent="end">
            <Button variant={isHovered ? 'primary' : 'outline'} ref={hoverRef}>
              <Link to="/espace-perso">
                {isHovered ? 'Espace Personnel' : `Salut ${auth.displayName} !`}
              </Link>
            </Button>
          </Flex>
        ) : (
          <Button variant={!isEmpty(auth) ? 'primary' : 'secondary'}>
            <Link to="/connexion">Se connecter</Link>
          </Button>
        )
      ) : null}
    </Flex>
  );
}

export default Navigation;
