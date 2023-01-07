import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Spinner, FixedSpinner } from '@components/atom/LoadingSpinner/Spinner';
import { defaultFadeInVariants } from '@constants/motion';
import { LoadingHandler } from '@components/atom/LoadingSpinner/LoadingHandler';

export default function LoadingSpinner({
  children,
  isLoading,
  isFixed,
}: {
  children?: ReactNode;
  isLoading: boolean;
  isFixed: boolean;
}) {
  return (
    <LoadingHandler
      isLoading={isLoading}
      loadingComponent={isFixed ? <FixedSpinner /> : <Spinner />}
    >
      <motion.div
        variants={defaultFadeInVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </LoadingHandler>
  );
}
