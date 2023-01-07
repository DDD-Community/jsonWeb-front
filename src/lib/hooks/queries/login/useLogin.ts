import { get } from '@src/api/client';
import { LoginResponseType } from '@src/types/login/login';

export function useLogin(AUTHORIZE_CODE: string) {
  return get<LoginResponseType>(`/users/login?code=${AUTHORIZE_CODE}`).then(
    ({ data }) => {
      const JWT: string = data.data.accessToken;
      if (JWT) localStorage.setItem('EXIT_LOGIN_TOKEN', JWT);
      window.location.replace('/');
      //     })
      //     .catch(() => {
      //       window.location.replace('/login');
    }
  );
}
