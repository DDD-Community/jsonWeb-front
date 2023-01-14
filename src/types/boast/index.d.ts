import { UserInfoType } from '../types';

export interface BoastType extends UserInfoType {
  boastId: number;
  cafeName: string;
  boastImage: string;
  hashtags: string[];
}

export type BoastListType = {
  boastList: BoastType[];
  totalNumber: number;
  isLast: boolean;
};

export type FeedContentsType = {
  image: string;
  hashtags: string[];
};

export type BoastEditType = {
  hashtags: string[];
  imageUrl: string;
  themeId: number;
};
