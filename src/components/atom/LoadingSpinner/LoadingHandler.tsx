import React, { PropsWithChildren, ReactElement, useId } from 'react';
import { AnimatePresence } from 'framer-motion';

interface LoadingSpinnerProps {
  isLoading: boolean;
  loadingComponent: ReactElement;
}

export function LoadingHandler({
  children,
  isLoading,
  loadingComponent,
}: PropsWithChildren<LoadingSpinnerProps>) {
  const id = useId();

  return (
    <AnimatePresence exitBeforeEnter>
      {isLoading ? (
        <React.Fragment key={id}>{loadingComponent}</React.Fragment>
      ) : (
        children
      )}
    </AnimatePresence>
  );
}
