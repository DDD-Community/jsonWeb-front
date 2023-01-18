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

export interface FeedContentsType {
  hashtags: string[];
  imageUrl: string;
}

export interface BoastEditType extends FeedContentsType {
  themeId: number;
}
