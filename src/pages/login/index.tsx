import { LoginLogo } from '@assets/svg/icon';
import { KAKAO_AUTH_URL } from '@src/constants/login';
import {
  LoginContainer,
  DescContainer,
  LoginDescription,
  TextHighlight,
  LoginButton,
} from './style';

const goLogin = () => {
  window.location.replace(KAKAO_AUTH_URL);
};

export default function Login() {
  return (
    <LoginContainer>
      <LoginLogo />
      <DescContainer>
        <LoginDescription>
          엑시트의 <TextHighlight color="green">회원</TextHighlight>이 되시면
        </LoginDescription>
        <LoginDescription>
          더 많은 <TextHighlight color="purple">혜택</TextHighlight>을 얻을 수
          있어요
        </LoginDescription>
      </DescContainer>
      <LoginButton onClick={goLogin}>카카오로 시작하기</LoginButton>
    </LoginContainer>
  );
}
