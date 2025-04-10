import { QuestionForm } from '@/components/QuestionForm';
import { Box, LoadingSkeletons, MainBlock, PageContainer } from '@botspot/ui';
import { Suspense } from 'react';

import { Posts } from '../../components/Posts';

export default function Blog() {
  return (
    <main className="">
      <PageContainer mb={8} mt={{ md: 15, xs: 10 }}>
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
