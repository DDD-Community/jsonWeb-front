import { useState } from 'react';
import LoginModal from './modal';
import ModalPortal from './portal';

export default function Login() {
  const [modalOn, setModalOn] = useState(false);

  const modalHandler = () => {
    setModalOn(!modalOn);
  };

  return (
    <div>
      <button type="button" onClick={modalHandler}>
        로그인
      </button>
      <ModalPortal>
        {modalOn && (
          <LoginModal onClose={modalHandler} message="좋아요를 누르시려면" />
        )}
      </ModalPortal>
    </div>
  );
}
