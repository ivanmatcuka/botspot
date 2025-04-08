'use client';

import { WordPressBlocksProvider } from '@faustwp/blocks';
// import { FaustProvider } from '@faustwp/core';
import { FC, PropsWithChildren } from 'react';

// import blocks from '../../wp-blocks';

export const WProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    // <FaustProvider pageProps={{}}>
    <WordPressBlocksProvider
      config={
        {}
        //   {
        //   blocks,
        // }
      }
    >
      {children}
    </WordPressBlocksProvider>
    // </FaustProvider>
  );
};
