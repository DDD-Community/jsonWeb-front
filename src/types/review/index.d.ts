import EvaluationType, { GenreType, UserInfoType } from '../types';

/**
 * @name mock-themeByCafe
 * @todo data spec 미정
 */
export interface ReviewThemeType {
  cafeId: number;
  themeId: number;
  title: string;
  description?: string;
}

export type ReviewEvaluationStarType = 'Star' | 'Lock';
export type ReviewEvaluationType = EvaluationType;

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

export interface ReviewEditType {
  content: string;
  difficulty: number;
  emotionFirst: string;
  emotionSecond: string;
  star: number;
}

export interface ReviewType extends UserInfoType, ReviewEditType {
  reviewId: number;
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
