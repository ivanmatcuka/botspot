import { Posts } from './Posts';

import { QuestionForm } from '../components/QuestionForm/QuestionForm';

import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { PageContainer } from '../components/PageContainer/PageContainer';

export default function Blog() {
  return (
    <main className="">
      <PageContainer mt={{ xs: 10, md: 15 }} mb={8}>
        <MainBlock
          headline="Our blog offers a clear overview of 3D scanning, with insights, tips, and detailed explanations for understanding the technology."
          subline="Questions & Articles"
          botomless
        />
      </PageContainer>

      <Posts />

      <QuestionForm />
    </main>
  );
}
