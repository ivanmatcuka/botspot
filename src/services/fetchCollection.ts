import { requestInit } from '@botspot/ui';

export const fetchCollection = async <T>(
  url: string,
): Promise<{ count: number; data: T[] }> => {
  try {
    const response = await fetch(url, requestInit);

    if (!response.ok) return { count: 0, data: [] };

    const data = await response.json();
    const count = Number(response.headers.get('X-WP-TotalPages')) || 1;

    return { count, data };
  } catch {
    return { count: 0, data: [] };
  }
};
