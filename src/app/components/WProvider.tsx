'use client';

import blocks from '../../wp-blocks';

import { WordPressBlocksProvider } from '@faustwp/blocks';
import { FaustProvider } from '@faustwp/core';
import { FC, PropsWithChildren } from 'react';

export const WProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <FaustProvider pageProps={{}}>
      <WordPressBlocksProvider
        config={{
          blocks,
        }}
      >
        {children}
      </WordPressBlocksProvider>
    </FaustProvider>
  );
};
