import styled from '@emotion/styled';
import { fullViewHeight } from '@src/lib/util/ui';
import Spinner from './Spinner';

interface FixedSpinnerProps {
  opacity?: number;
}

export function FixedSpinner({ opacity = 1 }: FixedSpinnerProps) {
  return (
    <FixedSpinnerContainer opacity={opacity} height={fullViewHeight()}>
      <Spinner />
    </FixedSpinnerContainer>
  );
}

const FixedSpinnerContainer = styled.div<{
  opacity: number;
  height: string | number;
}>`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: ${(props) => `${props.height}`};
  opacity: ${(props) => `${props.opacity}`};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 800;
`;
