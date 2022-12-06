import styled from '@emotion/styled';

const CloseButton = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
`;

const ModalContents = styled.div`
  margin: 50px;
  text-align: center;
`;

const LoginMessage = styled.h1`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.3;
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  width: 320px;
  background-color: #ffda56;
  padding: 20px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 15px;
`;

const CancelButton = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  font-size: 10px;
  margin-top: 10px;
  padding: 5px;
`;

type LoginModalPropsType = {
  cancelHandler: () => void;
  message: string;
};

export default function LoginModal({
  cancelHandler,
  message,
}: LoginModalPropsType) {
  const loginHandler = () => {
    cancelHandler();
  };

  return (
    <>
      <CloseButton onClick={() => cancelHandler()}>
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
      </CloseButton>
      <ModalContents>
        <LoginMessage>{message}</LoginMessage>
        <LoginMessage>로그인이 필요해요.</LoginMessage>
      </ModalContents>
      <LoginButton onClick={loginHandler}>카카오톡으로 시작하기</LoginButton>
      <CancelButton onClick={() => cancelHandler()}>일단 둘러보기</CancelButton>
    </>
  );
}
