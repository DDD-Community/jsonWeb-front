export type Response = {
  data: any;
  message: string;
};

export type CarouselListItemType = {
  id: number;
  src: string;
};

export type GenreListItemType = {
  id: number;
  name: string;
  src: string;
};

export type NavListItemType = {
  title: string;
  to: string;
};

export type CardListItemType = {
  src: string;
  title: string;
  description: string;
  averageRating?: number;
  reviewCount?: number;
};

export interface EvaluationType {
  id: number;
  title: string;
}

export type MypageListItemType = {
  title: string;
  to: string;
  image: string;
};

/**
 * @todo : 타입추가
 */
export type GenreTypeEnum = '공포' | '미스터리' | '로맨스';

export interface GenreType {
  genreId: number;
  genreName: GenreTypeEnum;
}

export type LevelTypeEnum = '초보' | '중수' | '고수' | '초고수';

export interface UserInfoType {
  isLiked: boolean;
  likeCount: number;
  modifiedAt: string;
  genre: GenreTypeEnum[];
  themeName: string;
  writerNickname: string;
  writerProfileImage: string;
  writerLevel: LevelTypeEnum;
}
