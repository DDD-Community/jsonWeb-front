import { authInstance } from '@src/api/client';
import { LoginResponseType } from '@src/types/login/login';

export const fetchAuth = (AUTHORIZE_CODE: string): Promise<LoginResponseType> =>
  authInstance.get(`/users/login?code=${AUTHORIZE_CODE}`);

export function useLogin(AUTHORIZE_CODE: string) {
  fetchAuth(AUTHORIZE_CODE)
    .then((response: LoginResponseType) => {
      const JWT = response.data.data.accessToken;
      if (JWT) localStorage.setItem('EXIT_LOGIN_TOKEN', JWT);
      window.location.replace('/');
    })
    .catch(() => {
      window.location.replace('/login');
    });
}
