import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { instance } from '@src/api/client';

export function KakaoLogin() {
  const navigate = useNavigate();
  const AUTHORIZE_CODE: string = new URL(window.location.href).searchParams.get(
    'code'
  )!;

  useEffect(() => {
    instance
      .get(`/users/login?code=${AUTHORIZE_CODE}`)
      .then((response) => {
        const JWT = response.data.data.accessToken;
        if (JWT) localStorage.setItem('jwt', JWT);
        navigate('/');
      })
      .catch(() => {
        navigate('/login');
      });
  }, []);

  return <div>login redirect ...</div>; /* spinner */
}

export function KakaoLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('jwt')) localStorage.removeItem('jwt');
    navigate('/login');
  }, []);

  return <div>logout redirect ...</div>; /* spinner */
}
