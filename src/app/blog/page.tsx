import { Posts } from './Posts';

import { QuestionForm } from '@/app/components/QuestionForm/QuestionForm';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { PageContainer } from '@/app/components/PageContainer/PageContainer';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3D ACADEMY – botspot',
};

export default function Blog() {
  return (
    <main className="">
      <PageContainer mt={{ xs: 10, md: 15 }} mb={8}>
        <MainBlock
          headline={
            'Our "3D Academy" offers a clear overview of 3D scanning, with insights, tips, and detailed explanations for understanding the technology.'
          }
          subline="3D Academy"
          botomless
        />
      </PageContainer>

      <Posts />

      <QuestionForm />
    </main>
  );
}
