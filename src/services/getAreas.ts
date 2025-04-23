import { CustomPost } from '@botspot/ui';

import { baseUrl, Block } from '.';
import { fetchCollection } from './fetchCollection';

export const getAreas = () =>
  fetchCollection<CustomPost<Block>>(
    `${baseUrl}/area?&per_page=100&acf_format=standard`,
  );
