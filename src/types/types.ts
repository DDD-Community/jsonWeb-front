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
