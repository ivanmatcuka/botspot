import { Posts } from './Posts';

import { QuestionForm } from '../components/QuestionForm/QuestionForm';

import { MainBlock } from '@/app/components/MainBlock/MainBlock';

export default function Blog() {
  return (
    <main className="">
      <MainBlock
        headline="Our blog offers a clear overview of 3D scanning, with insights, tips, and detailed explanations for understanding the technology."
        subline="Questions & Articles"
        botomless
      />

      <Posts />

      <QuestionForm />
    </main>
  );
}
