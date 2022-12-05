import styled from '@emotion/styled';

const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const StyledModal = styled.div`
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
`;

const StyledCloseButton = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
`;

const StyledLoginMessage = styled.h1`
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  margin: 50px;
  line-height: 1.3;
`;

const StyledLoginButton = styled.button`
  border: 0;
  outline: 0;
  width: 320px;
  background-color: #ffda56;
  padding: 20px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 15px;
`;

const StyledCancelButton = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  font-size: 10px;
  margin-top: 10px;
  padding: 5px;
`;

type LoginModalPropsType = {
  onClose: () => void;
  message: string;
};

export default function LoginModal({ onClose, message }: LoginModalPropsType) {
  const loginHandler = () => {};

  return (
    <StyledBackground>
      <StyledModal>
        <StyledCloseButton type="button" onClick={onClose}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              fill="#1C1B1F"
            />
          </svg>
        </StyledCloseButton>
        <StyledLoginMessage>
          {message}
          <br />
          로그인이 필요해요.
        </StyledLoginMessage>
        <StyledLoginButton type="button" onClick={loginHandler}>
          카카오톡으로 시작하기
        </StyledLoginButton>
        <StyledCancelButton type="button" onClick={onClose}>
          일단 둘러보기
        </StyledCancelButton>
      </StyledModal>
    </StyledBackground>
  );
}

// import React, { useState } from 'react';
// import Modal from './modal';

// export default function LoginModal() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <header>
//         <button type="button" onClick={() => setIsOpen(true)}>
//           Click to Open Modal
//         </button>

//         <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
//           This is Modal Content!
//         </Modal>
//       </header>
//     </div>
//   );
// }
