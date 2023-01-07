import axios, { AxiosError, AxiosResponse } from 'axios';

const getAccessTokenLocalStorage = () => {
  const accessToken = localStorage.getItem('EXIT_LOGIN_TOKEN');
  return accessToken ? `Bearer ${accessToken}` : '';
};

export const instance = axios.create({
  withCredentials: false,
  headers: {
    Authorization: `${getAccessTokenLocalStorage()}`,
  },
});

function interceptorResponseFulfilled(res: AxiosResponse) {
  return res.status >= 200 && res.status < 300
    ? res.data
    : Promise.reject(res.data);
}

function interceptorResponseRejected(error: AxiosError) {
  // @ts-ignore
  return Promise.reject(new Error(error.response?.data?.message ?? error));
}

instance.interceptors.response.use(
  interceptorResponseFulfilled,
  interceptorResponseRejected
);

export const instance2 = axios.create({
  baseURL: 'https://exitnow.link',
  withCredentials: false,
  headers: {
    Authorization: `${getAccessTokenLocalStorage()}`,
  },
});

export function get<T>(...args: Parameters<typeof instance2.get>) {
  return instance2.get<T, T>(...args);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T, T>(...args);
}

export function put<T>(...args: Parameters<typeof instance.put>) {
  return instance.put<T, T>(...args);
}

export function patch<T>(...args: Parameters<typeof instance.patch>) {
  return instance.patch<T, T>(...args);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T, T>(...args);
}
