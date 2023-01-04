import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const vibration = keyframes`
  from {
    transform: rotate(1deg);
  }
  to {
    transform: rotate(-1deg);
  }`;

const TextAreaWrapper = styled.div`
  margin: 16px 0;
`;

const TextAreaContents = styled.textarea<{ isOver: boolean }>`
  outline: none;
  border: 2px solid ${({ theme }) => theme.color.grayscale.gray_600};
  border-radius: 10px;
  background: ${({ theme }) => theme.color.grayscale.gray_800};
  padding: 10px;
  width: 310px;
  height: 200px;
  resize: none;
  color: ${({ theme }) => theme.color.primary.black};
  font-family: ${({ theme }) => `${theme.font.family}`};
  font-size: ${({ theme }) => `${theme.font.size.m}`};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-style: normal;
  animation-name: ${({ isOver }) => (isOver ? vibration : 'none')};
  animation-duration: 0.1s;
  animation-iteration-count: 10;

  ::placeholder {
    color: ${({ theme }) => theme.color.grayscale.gray_200};
  }
`;

const TextAreaCheckValidation = styled.p<{ isOver: boolean }>`
  position: absolute;
  right: 20px;
  bottom: 85px;
  color: ${(props) =>
    props.isOver
      ? props.theme.color.primary.purple
      : props.theme.color.grayscale.gray_500};
  font-family: ${({ theme }) => `${theme.font.family}`};
  font-size: ${({ theme }) => `${theme.font.size.s}`};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;
export { TextAreaWrapper, TextAreaContents, TextAreaCheckValidation };
