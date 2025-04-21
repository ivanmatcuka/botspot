import { requestInit } from '@botspot/ui';

export const fetchEntity = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await fetch(url, requestInit);

    if (!response.ok) return null;

    const data = await response.json();
    return data as T;
  } catch (error) {
    return null;
  }
};
