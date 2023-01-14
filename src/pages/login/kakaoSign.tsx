import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '@src/lib/hooks/queries/user';
import { KakaoSignType } from '@src/types/login/login';

export default function KakaoSign({ method }: KakaoSignType) {
  const navigate = useNavigate();
  const AUTHORIZE_CODE: string = new URL(window.location.href).searchParams.get(
    'code'
  )!;

  useEffect(() => {
    switch (method) {
      case 'LOGIN':
        useLogin(AUTHORIZE_CODE);
        break;
      case 'LOGOUT':
        if (localStorage.getItem('EXIT_LOGIN_TOKEN')) {
          localStorage.removeItem('EXIT_LOGIN_TOKEN');
          navigate('/login');
        } else {
          navigate('/');
        }
        break;
      default:
        break;
    }
  }, []);

  return <div />;
}
