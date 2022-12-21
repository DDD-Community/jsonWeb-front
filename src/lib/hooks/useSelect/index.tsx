import {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  RefObject,
} from 'react';

export const useSelect = <T extends HTMLElement>(
  selectBox: RefObject<T>
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [clickSelectedBox, setClickSelectedBox] = useState(false);

  useEffect(() => {
    const handleSelect = (e: Event) => {
      if (!e.target) return;
      if (!selectBox.current?.contains(e.target as HTMLElement)) {
        setClickSelectedBox(false);
      }
    };
    document.addEventListener('click', handleSelect);
    return () => document.removeEventListener('click', handleSelect);
  }, [selectBox]);

  return [clickSelectedBox, setClickSelectedBox];
};
