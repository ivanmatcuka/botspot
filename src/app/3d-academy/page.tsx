import { Posts } from '../../components/Posts';

import { LoadingSkeletons, MainBlock, PageContainer } from '@botspot/ui';
import { Box } from '@mui/material';
import { Suspense } from 'react';

import { QuestionForm } from '@/components/QuestionForm';

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
        <Suspense fallback={<LoadingSkeletons />}>
          <Posts />
        </Suspense>
      </Box>

      <QuestionForm />
    </main>
  );
}
