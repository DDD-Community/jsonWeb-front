import { MouseEventHandler } from 'react';
import styled from '@emotion/styled';
import { ButtonEnum } from '@constants/common';
import { generateUUID } from '@src/lib/util';

interface Props {
  buttonType: string;
  height: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string | number;
  disabled: boolean;
}

export default function Button({
  buttonType = ButtonEnum.WHITE,
  height = 40,
  onClick = () => {},
  text = '',
  disabled = false,
}: Props) {
  const uniqueId = generateUUID();
  const getClassFactory = () =>
    `button_${
      disabled ? ButtonEnum.GRAY : buttonType
    } button_${buttonType}--${uniqueId}`;

  return (
    <StyledButton
      aria-label="button"
      aria-disabled={disabled}
      buttonType={buttonType}
      height={height}
      onClick={onClick}
      disabled={disabled}
      className={getClassFactory()}
    >
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button<{
  buttonType: string;
  height: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}>`
  width: 327px;
  height: ${(props) => `${props.height}px`};
  border-radius: 7px;
  cursor: pointer;
  font-size: ${({ theme }) => `${theme.font.size.m}`};
  font-weight: ${({ theme }) => `${theme.font.weight.regular}`};

  &.button_white {
    border: 2px solid ${({ theme }) => `${theme.color.primary.purple}`};
    background-color: ${({ theme }) => `${theme.color.primary.white}`};
    color: ${({ theme }) => `${theme.color.primary.purple}`};
  }

  &.button_purple {
    border: 2px solid ${({ theme }) => `${theme.color.primary.purple}`};
    background-color: ${({ theme }) => `${theme.color.primary.purple}`};
    color: ${({ theme }) => `${theme.color.primary.white}`};
  }

  &.button_gray {
    border: 2px solid ${({ theme }) => `${theme.color.grayscale.gray_400}`};
    background-color: ${({ theme }) => `${theme.color.grayscale.gray_400}`};
    color: ${({ theme }) => `${theme.color.primary.white}`};
  }

  &:hover {
    opacity: 0.8;
  }
`;
