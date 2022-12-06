import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Ref } from 'react';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const ModalOverlay = styled.div<{
  ref: Ref<HTMLDivElement>;
  aniState: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  animation: ${(props) => (props.aniState ? fadeOut : fadeIn)} 0.4s;
`;

const slideIn = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0%); }
`;

const slideOut = keyframes`
  from { transform: translateY(0%); }
  to { transform: translateY(100%); }
`;

export const ModalBox = styled.div<{ aniState: boolean }>`
  box-sizing: border-box;
  width: 360px;
  height: 320px;
  position: fixed;
  bottom: 0;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  padding: 20px;
  animation: ${(props) => (props.aniState ? slideOut : slideIn)} 0.4s;
`;

export const CloseButton = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
`;

export const ModalContents = styled.div`
  margin: 50px;
  text-align: center;
`;

export const LoginMessage = styled.h1`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.3;
`;

export const LoginButton = styled.button`
  border: 0;
  outline: 0;
  width: 320px;
  background-color: #ffda56;
  padding: 20px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 15px;
`;

export const CancelButton = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  font-size: 10px;
  margin-top: 10px;
  padding: 5px;
`;
