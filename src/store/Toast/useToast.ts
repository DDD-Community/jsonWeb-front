import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { ToastInterface, toastMessageState } from './toastState';

const DEFAULT_DURATION = 1500;

export function useToast() {
  const [currentToast, setCurrentToast] = useRecoilState(toastMessageState);

  const removeToast = useCallback(
    (key: string) => {
      setCurrentToast((prev) => {
        if (!prev) return null;
        if (prev.key === key) return null;
        return prev;
      });
    },
    [setCurrentToast]
  );

  const fireToast = useCallback(
    ({
      key = getKey(),
      content,
      duration = DEFAULT_DURATION,
    }: ToastInterface) => {
      setCurrentToast({ key, content, duration });
      setTimeout(() => removeToast(key), duration);
    },
    [removeToast, setCurrentToast]
  );
  return { currentToast, fireToast };
}

function getKey() {
  const date = new Date();
  return date.getTime().toString();
}
