'use server';

const formsUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/contact-form-7/v1/contact-forms`;

export const submitForm = async (formData: FormData, formId: number) => {
  try {
    const response = await fetch(`${formsUrl}/${formId}/feedback`, {
      body: formData,
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return await response.json();
  } catch (error) {
    return error;
  }
};
