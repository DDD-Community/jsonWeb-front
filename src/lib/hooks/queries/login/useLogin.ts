import { get } from '@src/api/client';
import { LoginResponseType } from '@src/types/login/login';
import { useNavigate } from 'react-router-dom';

export function useLogin(AUTHORIZE_CODE: string) {
  const navigate = useNavigate();

  return get<LoginResponseType>(`/users/login?code=${AUTHORIZE_CODE}`)
    .then(({ data }) => {
      const JWT = data.data.accessToken;
      if (JWT) localStorage.setItem('EXIT_LOGIN_TOKEN', JWT);
      navigate('/');
    })
    .catch(() => {
      navigate('/login');
    });
}
