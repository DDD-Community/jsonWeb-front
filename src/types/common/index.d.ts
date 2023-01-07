import { ButtonEnum } from '@constants/common';

export type ButtonType = keyof typeof ButtonEnum;
export type MenuListItemType = { id: number; name: string; value?: string };

export { ButtonEnum };
