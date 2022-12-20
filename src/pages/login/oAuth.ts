const REST_API_KEY: string = 'd3b3b7666feed15c2c70802bf4180048';
const REDIRECT_URI: string = 'http://localhost:3000/user/login';

export const KAKAO_AUTH_URL: string = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
