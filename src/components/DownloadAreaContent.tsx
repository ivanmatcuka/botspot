'use client';

import { DownloadForm, FORM_ID } from '@/components/DownloadForm';
import { useSnackbar } from '@/components/Snackbar';
import { CustomFields, CustomPost, submitForm } from '@/services';
import { MainBlock, PageContainer, Post } from '@botspot/ui';
import { Grid } from '@mui/material';
import { FC, useState } from 'react';

import { NextButton } from './NextButton';

type DownloadAreaContentProps = {
  defaultProductSlug?: string;
  products: CustomPost[];
};
export const DownloadAreaContent: FC<DownloadAreaContentProps> = ({
  defaultProductSlug,
  products,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { showSnackbar } = useSnackbar();

  const onSubmit = (formData: FormData) => {
    setIsLoading(true);

    submitForm(formData, FORM_ID)
      .then(() => {
        showSnackbar('Thank you for your feedback!', 'success', 3000);
        setIsSubmitted(true);
      })
      .catch(() => showSnackbar('Something went wrong!', 'error', 3000))
      .finally(() => setIsLoading(false));
  };

  return isSubmitted ? (
    <>
      <PageContainer mb={6} mt={8}>
        <MainBlock
          headline="Exclusively access all relevant data about our 3D Scanners below."
          subline="Download Area"
        />
      </PageContainer>
      <PageContainer mb={8}>
        <Grid spacing={{ lg: 5, md: 3, xs: 2 }} container>
          {products.map((product, index) => {
            const { datasheet, picture }: Partial<CustomFields> =
              product.acf ?? {};

            return (
              <Grid key={index} lg={4} md={6} xs={12} item>
                <Post
                  excerpt={product.excerpt.rendered}
                  featuredImage={picture}
                  objectFit="contain"
                  title={product.title.rendered}
                >
                  <NextButton href={datasheet} variant="secondary">
                    Download Data Sheet
                  </NextButton>
                </Post>
              </Grid>
            );
          })}
        </Grid>
      </PageContainer>
    </>
  ) : (
    <PageContainer mt={8}>
      <DownloadForm
        defaultProductName={
          products.find((product) => product.slug === defaultProductSlug)?.title
            .rendered
        }
        isLoading={isLoading}
        onSubmit={onSubmit}
        productNames={products.map((product) => product.title.rendered)}
      />
    </PageContainer>
  );
};
