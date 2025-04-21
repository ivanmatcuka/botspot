import { baseUrl, CustomPost } from '.';
import { fetchCollection } from './fetchCollection';

export const getAreas = () =>
  fetchCollection<CustomPost>(
    `${baseUrl}/area?&per_page=100&acf_format=standard`,
  );
