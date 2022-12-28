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
