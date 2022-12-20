import { useState, useRef } from 'react';
import * as st from './modalStyle';
import ModalPortal from './portal';
import { ReactComponent as Close } from '../../../assets/svg/close.svg';
import { KAKAO_AUTH_URL } from '../../../pages/login/oAuth';

interface ModalPropsType {
  visible: boolean;
  modalToggle: () => void;
  message: string;
}

export default function Modal({
  visible,
  modalToggle,
  message,
}: ModalPropsType) {
  const [animate, setAnimate] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const modalAnimation = (event?: Event) => {
    if (visible) {
      if ((event && modalRef.current === event.target) || !event) {
        setAnimate(true);
        setTimeout(() => {
          setAnimate(false);
          modalToggle();
        }, 400);
      }
    }
  };

  const goLogin = () => {
    window.location.replace(KAKAO_AUTH_URL);
  };

  return (
    <ModalPortal>
      <st.ModalOverlay
        ref={modalRef}
        aniState={animate}
        onClick={() => modalAnimation}
      />
      <st.ModalBox aniState={animate}>
        <st.CloseButton onClick={() => modalToggle}>
          <Close width="24px" height="24px" />
        </st.CloseButton>
        <st.ModalContents>
          <st.LoginMessage>{message}</st.LoginMessage>
          <st.LoginMessage>로그인이 필요해요.</st.LoginMessage>
        </st.ModalContents>
        <st.LoginButton onClick={() => goLogin}>
          카카오로 시작하기
        </st.LoginButton>
        <st.CancelButton onClick={modalToggle}>일단 둘러보기</st.CancelButton>
      </st.ModalBox>
    </ModalPortal>
  );
}
