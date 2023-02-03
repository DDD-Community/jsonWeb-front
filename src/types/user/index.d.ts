import { Response, LevelTypeEnum } from '../types';

export interface JsonWebTokenType {
  accessToken: string;
}

export interface LoginDataType extends Response {
  data: JsonWebTokenType;
}

export type KakaoSignType = {
  method: 'LOGIN' | 'LOGOUT' | 'UNREGISTER';
};

type UserGenderEnum = 'male' | 'female';
type UserAgeEnum =
  | '10~19'
  | '20~29'
  | '30~39'
  | '40~49'
  | '50~59'
  | '60~69'
  | '70~79';

export type UserProfileType = {
  nickname: string;
  profileImageUrl: string;
  gender: UserGenderEnum;
  ageRange: UserAgeEnum;
  exp: number;
  userLevel: LevelTypeEnum;
  badges: string[];
};
