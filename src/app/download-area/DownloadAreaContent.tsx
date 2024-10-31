'use client';

import { DownloadForm } from '../components/DownloadForm';
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
      <PageContainer mb={6} mt={8}>
        <MainBlock
          headline="Exclusively access all relevant data about our 3D Scanners below."
          subline="Download Area"
        />
      </PageContainer>
      <PageContainer mb={8}>
        <Grid spacing={{ xs: 2, md: 3, lg: 5 }} container>
          {products.map((product, index) => {
            const { datasheet, picture }: any = product.acf;

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
        productNames={products.map((product) => product.title.rendered)}
        onSubmit={onSubmit}
      />
    </PageContainer>
  );
};
