import { CustomPost } from '@botspot/ui';

import { baseUrl, Block } from '.';
import { fetchCollection } from './fetchCollection';

export const getProducts = () =>
  fetchCollection<CustomPost<Block>>(
    `${baseUrl}/product?&per_page=100&acf_format=standard`,
  );
