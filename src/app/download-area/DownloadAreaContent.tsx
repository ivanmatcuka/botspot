'use client';

import { Button } from '@/components/Button/Button';
import { DownloadForm, FORM_ID } from '@/components/DownloadForm';
import { MainBlock } from '@/components/MainBlock/MainBlock';
import { PageContainer } from '@/components/PageContainer';
import { Post } from '@/components/Post';
import { useSnackbar } from '@/components/Snackbar';
import { CustomFields, CustomPost, submitFeedbackForm } from '@/service';

import { Grid } from '@mui/material';
import { FC, useState } from 'react';

type DownloadAreaContentProps = {
  products: CustomPost[];
  defaultProductSlug?: string;
};
export const DownloadAreaContent: FC<DownloadAreaContentProps> = ({
  products,
  defaultProductSlug,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { showSnackbar } = useSnackbar();

  const onSubmit = (formData: FormData) => {
    setIsLoading(true);

    submitFeedbackForm(formData, FORM_ID)
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
        <Grid spacing={{ xs: 2, md: 3, lg: 5 }} container>
          {products.map((product, index) => {
            const { datasheet, picture }: Partial<CustomFields> =
              product.acf ?? {};

            return (
              <Grid key={index} lg={4} md={6} xs={12} item>
                <Post
                  cta={
                    <Button href={datasheet} variant="secondary">
                      Download Data Sheet
                    </Button>
                  }
                  excerpt={product.excerpt.rendered}
                  featuredImage={picture}
                  objectFit="contain"
                  title={product.title.rendered}
                />
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
        productNames={products.map((product) => product.title.rendered)}
        onSubmit={onSubmit}
      />
    </PageContainer>
  );
};
