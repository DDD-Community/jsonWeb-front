import { useState, useRef, useEffect, Ref } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import ModalPortal from './portal';
import LoginModal from '../../../pages/login/loginModal';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const ModalOverlay = styled.div<{
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

const ModalBox = styled.div<{ aniState: boolean }>`
  box-sizing: border-box;
  width: 360px;
  height: 45%;
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

type ModalPropsType = {
  visible: boolean;
  onClose: () => void;
  message: string;
};

export default function Modal({ visible, onClose, message }: ModalPropsType) {
  const [animate, setAnimate] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const modalCloseHandler = (event?: Event) => {
    if (visible) {
      if ((event && modalRef.current === event.target) || !event) {
        setAnimate(true);
        setTimeout(() => {
          setAnimate(false);
          onClose();
        }, 400);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('click', modalCloseHandler);
    return () => {
      window.removeEventListener('click', modalCloseHandler);
    };
  }, []);

  return (
    <ModalPortal>
      <ModalOverlay ref={modalRef} aniState={animate} />
      <ModalBox aniState={animate}>
        <LoginModal cancelHandler={modalCloseHandler} message={message} />
      </ModalBox>
    </ModalPortal>
  );
}
