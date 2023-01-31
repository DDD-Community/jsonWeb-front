import { Splash } from '@assets/svg/icon';
import { KAKAO_AUTH_URL } from '@src/constants/login';
import { LoginContainer, LoginButton } from './style';

const goLogin = () => {
  window.location.replace(KAKAO_AUTH_URL);
};

export default function Login() {
  return (
    <LoginContainer>
      <Splash />
      <LoginButton onClick={goLogin}>카카오로 시작하기</LoginButton>
    </LoginContainer>
  );
}
