type JsonWebTokenType = {
  accessToken: string;
};

type ResponseDataType = {
  message: string;
  data: JsonWebTokenType;
};

export type LoginResponseType = {
  data: ResponseDataType;
};

export type KakaoSignType = {
  method: 'LOGIN' | 'LOGOUT' | 'UNREGISTER';
};
