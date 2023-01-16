import React from 'react';
import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';

import { defaultFadeInUpVariants } from '@constants/motion';
import { useToast } from '@src/store/Toast';

export default function Toast() {
  const { currentToast } = useToast();

  return (
    <ToastContainer>
      <AnimatePresence exitBeforeEnter>
        {currentToast && (
          <ToastMotion
            key={currentToast.content}
            variants={defaultFadeInUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {currentToast.content}
          </ToastMotion>
        )}
      </AnimatePresence>
    </ToastContainer>
  );
}

const BOTTOM_HEIGHT = '64px';

const ToastContainer = styled.section`
  position: fixed;
  bottom: ${BOTTOM_HEIGHT};
  left: 0;
  right: 0;
  width: 100%;
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin: 0 auto;
  padding: 20px;
  z-index: 9999;
`;

const ToastMotion = styled(motion.div)`
  font-family: ${({ theme }) => `${theme.font.family}`};
  font-size: ${({ theme }) => `${theme.font.size.s}`};
  color: ${({ theme }) => `${theme.color.primary.white}`};
  background-color: ${({ theme }) => `${theme.color.grayscale.gray_900}`};
  padding: 16px;
  text-align: center;
  border-radius: 10px;
`;
