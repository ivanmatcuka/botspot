import { getComponentBySlug } from '@/services/getComponentBySlug';
import { LegacyPostContainer } from '@botspot/ui';
import { FC } from 'react';

import { WPBlocks } from './WPBlocks';

const PAGE_SLUG = 'jobs-footer';

export const JobsFooter: FC = async () => {
  const page = await getComponentBySlug(PAGE_SLUG);
  if (!page?.block_data) return null;

  const blocks = page.block_data;

  return (
    page && (
      <LegacyPostContainer>
        <WPBlocks blocks={blocks} />
      </LegacyPostContainer>
    )
  );
};
