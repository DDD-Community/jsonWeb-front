import * as S from './loginStyle';
import { KAKAO_AUTH_URL } from './oAuth';
import { LoginLogo } from '../../assets/svg/icon';

export default function Login() {
  const goLogin = () => {
    window.location.replace(KAKAO_AUTH_URL);
  };

  return (
    <S.LoginPageDiv>
      <LoginLogo />
      <S.DescriptionDiv>
        <S.LoginDescription>
          엑시트의 <S.TextGreen>회원</S.TextGreen>이 되시면
        </S.LoginDescription>
        <S.LoginDescription>
          더 많은 <S.TextPurple>혜택</S.TextPurple>을 얻을 수 있어요
        </S.LoginDescription>
      </S.DescriptionDiv>
      <S.LoginButton onClick={goLogin}>카카오로 시작하기</S.LoginButton>
    </S.LoginPageDiv>
  );
}
