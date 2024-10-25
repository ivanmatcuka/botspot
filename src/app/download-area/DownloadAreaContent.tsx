'use client';

import { DownloadForm } from '../components/DownloadForm/DownloadForm';
import { sendEmail } from '../actions';

import { PageContainer } from '@/app/components/PageContainer/PageContainer';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { Button } from '@/app/components/Button/Button';
import { Post } from '@/app/components/Post/Post';
import { CustomPost } from '@/services/mainService';

import { Grid } from '@mui/material';
import { FC, useState } from 'react';

type DownloadAreaContentProps = {
  products: CustomPost[];
};
export const DownloadAreaContent: FC<DownloadAreaContentProps> = ({
  products,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (topic: string, message: string) => {
    sendEmail(
      process.env.NEXT_PUBLIC_EMAIL_FROM ?? '',
      `New download form submission for ${topic}`,
      message,
    ).then(() => setIsSubmitted(true));
  };

  return isSubmitted ? (
    <>
      <PageContainer mt={8} mb={6}>
        <MainBlock
          headline="Exclusively access all relevant data about our 3D Scanners below."
          subline="Download Area"
        />
      </PageContainer>
      <PageContainer mb={8}>
        <Grid container spacing={{ xs: 2, md: 3, lg: 5 }}>
          {products.map((product, index) => {
            const { datasheet, picture }: any = product.acf;

            return (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Post
                  title={product.title.rendered}
                  excerpt={product.excerpt.rendered}
                  cta={
                    <Button variant="secondary" href={datasheet}>
                      Download Data Sheet
                    </Button>
                  }
                  featuredImage={picture}
                  objectFit="contain"
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
        productNames={products.map((product) => product.title.rendered)}
        onSubmit={onSubmit}
      />
    </PageContainer>
  );
};
