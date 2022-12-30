import axios, { AxiosError, AxiosResponse } from 'axios';

export const instance = axios.create({
  baseURL: 'http://13.124.179.64:8080',
  withCredentials: true,
});

/**
 * @name 인증 인스턴스 예시
 * @param token
 */
export function replaceAccessTokenForRequestInstance(token: string) {
  instance.defaults.headers.common.accessToken = token;
}

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

/**
 * @name http 메소드 추상화
 * @param args
 */
export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T, T>(...args);
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
