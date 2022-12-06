import * as st from '../../components/blocks/modal/modalStyle';

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
      <st.CloseButton onClick={() => cancelHandler()}>
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
      </st.CloseButton>
      <st.ModalContents>
        <st.LoginMessage>{message}</st.LoginMessage>
        <st.LoginMessage>로그인이 필요해요.</st.LoginMessage>
      </st.ModalContents>
      <st.LoginButton onClick={loginHandler}>카카오로 시작하기</st.LoginButton>
      <st.CancelButton onClick={() => cancelHandler()}>
        일단 둘러보기
      </st.CancelButton>
    </>
  );
}
