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
