import { baseUrl, CustomPost } from '.';
import { fetchCollection } from './fetchCollection';

export const getProducts = () =>
  fetchCollection<CustomPost>(
    `${baseUrl}/product?&per_page=100&acf_format=standard`,
  );
