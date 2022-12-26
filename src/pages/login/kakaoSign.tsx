import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const api = axios.create({
  baseURL: 'http://13.124.179.64:8080/user',
});

export function KakaoLogin() {
  const navigate = useNavigate();
  const AUTHORIZE_CODE: string = new URL(window.location.href).searchParams.get(
    'code'
  )!;

  useEffect(() => {
    api
      .get(`/login?code=${AUTHORIZE_CODE}`)
      .then((response) => {
        const JWT = response.data.data.accessToken;
        if (JWT) localStorage.setItem('jwt', JWT);
        navigate('/');
      })
      .catch(() => {
        navigate('/user/login');
      });
  }, []);

  return <div>login redirect ...</div>; /* spinner */
}

export function KakaoLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('jwt')) localStorage.removeItem('jwt');
    navigate('/user/login');
  }, []);

  return <div>logout redirect ...</div>; /* spinner */
}
