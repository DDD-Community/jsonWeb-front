import EvaluationType from '../types';
/**
 * @name mock-themeByCafe
 * @todo data spec 미정
 */
export interface ReviewThemeType {
  cafeId: number;
  themeId: number;
  title: string;
  description: string;
}

export type ReviewEvaluationStarType = 'Star' | 'Lock';
export type ReviewEvaluationType = EvaluationType;

/**
 * @todo : 타입추가
 */
export type GenreTypeEnum = '공포' | '미스터리';

export interface GenreType {
  genreId: number;
  genreName: GenreTypeEnum;
}

export interface ReviewThemeDetailType {
  ageLimit: string;
  avgStar: number;
  description: string;
  difficulty: number;
  genreList: GenreType[];
  imageUrl: string;
  maxPlayerCount: number;
  minPlayerCount: number;
  name: string;
  reviewCount: number;
  themeId: number | undefined;
  time: number;
}

export interface UserInfoType {
  isLiked: boolean;
  likeCount: number;
  modifiedAt: string;
  themeGenre: GenreTypeEnum[];
  themeName: string;
  writerNickname: string;
  profileImageUrl: string;
  nickname: string;
}

export interface ReviewType extends UserInfoType {
  content: string;
  difficulty: number;
  emotionFirst: string;
  emotionSecond: string;
  reviewId: number;
  star: number;
}

export interface ReviewListType {
  isLast: true;
  reviewList: ReviewType[];
  totalNumber: number;
}

export type emoji = '재밌어했어요😉' | '무서워요😨';

export interface PopularType {
  emotion: emoji;
  percentage: number;
}
