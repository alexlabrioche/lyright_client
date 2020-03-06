import React, { useMemo } from 'react';
import { Flex } from 'rebass';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const MotionContainer = styled(motion.div)`
  width: 350px;
  height: 350px;
  display: flex;
  place-content: center;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
`;

const MotionSvgIcon = styled(motion.svg)`
  width: 75%;
  overflow: visible;
  stroke: #fff;
  stroke-width: 10;
  stroke-linejoin: round;
  stroke-linecap: round;
`;

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)',
  },
};

export default function SplashScreen({ isCompleted }) {
  const totalDuration = 1800;

  useMemo(() => {
    setTimeout(() => {
      isCompleted(true);
    }, totalDuration);
  }, [isCompleted]);

  return (
    <Flex
      variant="app"
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AnimatePresence>
        <MotionContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0 }}
        >
          <MotionSvgIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <motion.path
              d="M431.666,239.934c0-8.284-6.717-15-15-15c-8.285,0-15,6.716-15,15c0,80.32-65.346,145.666-145.666,145.666
			s-145.666-65.346-145.666-145.666c0-8.284-6.717-15-15-15c-8.285,0-15,6.716-15,15c0,91.809,70.799,167.383,160.666,175.02V482
			h-33.199c-8.285,0-15,6.716-15,15s6.715,15,15,15h96.4c8.283,0,15-6.716,15-15s-6.717-15-15-15H271v-67.047
      C360.867,407.316,431.666,331.742,431.666,239.934z"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 1.2, ease: 'easeInOut' },
                fill: {
                  duration: 1.4,
                  ease: [1, 0, 0.8, 1],
                },
              }}
            />
            <motion.path
              d="M256,0c-43.707,0-79.266,35.559-79.266,79.266v160.668c0,43.707,35.559,79.265,79.266,79.265
			c43.709,0,79.268-35.559,79.268-79.266V79.266C335.268,35.559,299.709,0,256,0z"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 1.2, ease: 'easeInOut' },
                fill: { duration: 1.4, ease: [1, 0, 0.8, 1] },
              }}
            />
          </MotionSvgIcon>
        </MotionContainer>
      </AnimatePresence>
    </Flex>
  );
}
