import { atom } from 'recoil';
import { TypiCodeInterface } from '@src/types/typicode/typicode';

/**
 * @name [스켈레톤] @typicode Atom
 */
export interface TypiCodeState {
  data: TypiCodeInterface | undefined;
}

export const typiCodeState = atom<TypiCodeState | null>({
  key: 'typicodeState',
  default: null,
});
