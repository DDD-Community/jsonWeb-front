import { useState, useRef, useEffect } from 'react';
import * as st from './modalStyle';
import ModalPortal from './portal';
import LoginModal from '../../../pages/login/loginModal';

type ModalPropsType = {
  visible: boolean;
  onClose: () => void;
  message: string;
};

export default function Modal({ visible, onClose, message }: ModalPropsType) {
  const [animate, setAnimate] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const loginModalHandler = (event?: Event) => {
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
    window.addEventListener('click', loginModalHandler);
    return () => {
      window.removeEventListener('click', loginModalHandler);
    };
  }, []);

  return (
    <ModalPortal>
      <st.ModalOverlay ref={modalRef} aniState={animate} />
      <st.ModalBox aniState={animate}>
        <LoginModal cancelHandler={loginModalHandler} message={message} />
      </st.ModalBox>
    </ModalPortal>
  );
}
