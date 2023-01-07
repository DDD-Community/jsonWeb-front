import { atom } from 'recoil';

/**
 * @name [스켈레톤] @typicode Atom
 */
export interface TypiCodeState {
  data: any | undefined;
}

export const typiCodeState = atom<TypiCodeState | null>({
  key: 'typicodeState',
  default: null,
});
