import {
  LoginPageDiv,
  DescriptionDiv,
  LoginDescription,
  TextHighlight,
  LoginButton,
} from './loginStyle';
import { LoginLogo } from '../../assets/svg/icon';
import useLogin from '../../lib/hooks/useLogin';

export default function Login() {
  // const goLogin = useLogin();

  return (
    <LoginPageDiv>
      <LoginLogo />
      <DescriptionDiv>
        <LoginDescription>
          엑시트의 <TextHighlight color="green">회원</TextHighlight>이 되시면
        </LoginDescription>
        <LoginDescription>
          더 많은 <TextHighlight color="purple">혜택</TextHighlight>을 얻을 수
          있어요
        </LoginDescription>
      </DescriptionDiv>
      <LoginButton onClick={useLogin()}>카카오로 시작하기</LoginButton>
    </LoginPageDiv>
  );
}
