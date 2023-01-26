import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { motion, Variants } from 'framer-motion';
import { defaultEasing } from '@constants/motion';

const wrapperVariants: Variants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.5, ease: defaultEasing },
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: defaultEasing },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.5, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};

const characterVariants: Variants = {
  initial: {
    y: 0,
    transition: { duration: 0.5, ease: defaultEasing },
  },
  animate: {
    y: [0, 40, 0],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

const shadowVariants: Variants = {
  animate: {
    width: [28, 42, 28],
    transition: { duration: 2, ease: 'easeInOut', repeat: Infinity },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

const SpinnerContainer = styled(motion.div)<{
  height: string | number;
}>`
  position: fixed;
  top: 45%;
  left: 50%;
  width: 240px;
  transform: translateX(-50%);
  height: ${(props) => `${props.height}`};
  z-index: 800;
`;

const CharacterMotion = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 0%;
  margin-left: 36px;
  margin-top: -160px;
`;
const ShadowMotion = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 0%;
  margin-left: 106px;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
`;

const blinking1 = keyframes`
    0 {
     transform: scale(0.6);
     opacity: 0.2;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(0.6);
      opacity: 0.2;
    }
`;
const blinking2 = keyframes`
    0 {
     transform: scale(1.2);
     opacity: 0.4;
    }
    50% {
      transform: scale(0.8);
      opacity: 1;
    }
    100% {
      transform: scale(1.2);
      opacity: 0.4;
    }
`;

const blinking3 = keyframes`
    0 {
     transform: scale(1.2);
     opacity: 0.4;
    }
    50% {
      transform: scale(2);
      opacity: 1;
    }
    100% {
      transform: scale(1.2);
      opacity: 0.4;
    }
`;

const blinkingTitle = keyframes`
    0 {
     opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
`;

const ShyMotion = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 0%;

  .pink {
    position: absolute;
    top: 0%;
    left: 0%;
    animation: ${blinking1} 2s ease-in-out infinite;
    &-circle {
      margin-top: -90px;
      margin-left: 50px;
    }
    &-star {
      margin-top: -70px;
      margin-left: 190px;
    }
  }
  .green {
    position: absolute;
    top: 0%;
    left: 0%;
    animation: ${blinking2} 1s ease-in-out infinite;
    &-circle {
      margin-top: -30px;
      margin-left: 180px;
    }
    &-star {
      margin-top: -120px;
      margin-left: 30px;
    }
  }
  .yellow {
    position: absolute;
    top: 0%;
    left: 0%;
    animation: ${blinking3} 1.5s ease-in-out infinite;
    &-circle {
      margin-top: -140px;
      margin-left: 180px;
    }
    &-star {
      margin-top: -30px;
      margin-left: 60px;
    }
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => `${theme.font.family}`};
  font-size: ${({ theme }) => `${theme.font.size.l}`};
  font-weight: ${({ theme }) => `${theme.font.weight.medium}`};
  color: ${({ theme }) => `${theme.color.grayscale.gray_200}`};
  margin-left: 34px;
  margin-top: 100px;
  gap: 15px;
  animation: ${blinkingTitle} 0.5s ease-in-out infinite;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => `${theme.font.size.xxl}`};
  font-weight: ${({ theme }) => `${theme.font.weight.bold}`};
  color: ${({ theme }) => `${theme.color.primary.black}`};
`;

const Description = styled.p`
  margin-top: -5px;
`;

export {
  SpinnerContainer,
  CharacterMotion,
  ShadowMotion,
  ShyMotion,
  wrapperVariants,
  characterVariants,
  shadowVariants,
  TextWrapper,
  Title,
  Description,
};
