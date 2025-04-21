'use server';

type Field = {
  attr: string;
  basetype: string;
  content: string;
  labels: string[];
  name: string;
  options: string[];
  pipes: Record<string, unknown>;
  raw_name: string;
  raw_values: string[];
  type: string;
  values: string[];
};

type ApiResponse = {
  fields: Field[];
  status: number;
};

const customFormsUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/botspot/v1/forms`;

export const getForm = async (formId?: number): Promise<ApiResponse | null> => {
  try {
    const response = await fetch(`${customFormsUrl}/${formId}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return await response.json();
  } catch (error) {
    return null;
  }
};
