import { Posts } from './Posts';

import { Box, Grid } from '@mui/material';
import { Metadata } from 'next';

import { MainBlock } from '@/components/MainBlock';
import { PageContainer } from '@/components/PageContainer';
import { QuestionForm } from '@/components/QuestionForm';
import { generatePageMetadata } from '@/utils';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('3d-academy');
}

export default function Blog() {
  return (
    <main className="">
      <PageContainer mb={8} mt={{ xs: 10, md: 15 }}>
        <MainBlock
          headline={
            'Our "3D Academy" offers a clear overview of 3D scanning, with insights, tips, and detailed explanations for understanding the technology.'
          }
          subline="3D Academy"
          botomless
        />
      </PageContainer>

      <Box className="w-full flex justify-center" maxWidth="xl" mx="auto">
        <Grid spacing={{ xs: 2, md: 3, lg: 5 }} xs={10} container>
          <Posts />
        </Grid>
      </Box>

      <QuestionForm />
    </main>
  );
}
