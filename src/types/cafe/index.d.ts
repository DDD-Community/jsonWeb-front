import { GenreType } from '../types';

export type CafeType = {
  address: string;
  avgStar: number;
  cafeId: number;
  imageUrl: string;
  isLiked: boolean;
  name: string;
  reviewCount: number;
};

export type CafeListType = {
  cafeList: CafeType[];
  totalNumber: number;
  isLast: boolean;
};

export interface ThemeDetailType {
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
