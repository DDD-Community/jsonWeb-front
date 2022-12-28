export default function useLogin() {
  const REST_API_KEY = 'd3b3b7666feed15c2c70802bf4180048';
  const REDIRECT_URI = 'http://localhost:3000/user/login';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
  const goLogin = () => {
    window.location.replace(KAKAO_AUTH_URL);
  };
  return goLogin;
}