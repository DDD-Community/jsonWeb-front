import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLoginToken } from '@src/api/client';

export function KakaoLogin() {
  const AUTHORIZE_CODE: string = new URL(window.location.href).searchParams.get(
    'code'
  )!;

  useEffect(() => {
    getLoginToken(AUTHORIZE_CODE);
  }, []);

  return <div>login redirect ...</div>; /* spinner */
}

export function KakaoLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('EXIT_LOGIN_TOKEN')) {
      localStorage.removeItem('EXIT_LOGIN_TOKEN');
      navigate('/login');
    } else {
      navigate('/');
    }
  }, []);

  return <div>logout redirect ...</div>; /* spinner */
}
