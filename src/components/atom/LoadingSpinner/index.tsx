import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Spinner } from '@components/atom/LoadingSpinner/Spinner';
import { defaultFadeInVariants } from '@constants/motion';
import { LoadingHandler } from '@components/atom/LoadingSpinner/LoadingHandler';

export default function LoadingSpinner({
  children,
  isLoading,
}: {
  children: ReactNode;
  isLoading: boolean;
}) {
  return (
    <LoadingHandler isLoading={isLoading} loadingComponent={<Spinner />}>
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
