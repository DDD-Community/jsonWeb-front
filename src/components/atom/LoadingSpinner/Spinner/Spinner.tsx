import styled from '@emotion/styled';
import { motion, Variants } from 'framer-motion';

import { defaultEasing } from '@constants/motion';

export default function Spinner() {
  return (
    <SpinnerContainer
      variants={wrapperVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <SpinnerContents variants={spinnerVariants} animate="animate" exit="exit">
        <SpinnerSection />
      </SpinnerContents>
    </SpinnerContainer>
  );
}

const SpinnerContainer = styled(motion.div)`
  width: 100px;
  height: 100px;
  padding: 14px;
`;

const SpinnerContents = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

const SpinnerSection = styled(motion.div)`
  width: 27px;
  height: 27px;
  border-radius: 50%;
  background-color: ${({ theme }) => `${theme.color.primary.purple}`};
`;

const wrapperVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.5, ease: defaultEasing },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: defaultEasing },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.5, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};

const spinnerVariants: Variants = {
  animate: {
    rotate: 360,
    transition: { duration: 2, ease: 'easeInOut', repeat: Infinity },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};
