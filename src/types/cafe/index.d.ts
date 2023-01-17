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
