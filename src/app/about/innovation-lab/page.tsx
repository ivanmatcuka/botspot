import { FeedbackForm } from '@/components/FeedbackForm';
import { WPBlocks } from '@/components/WPBlocks';
import { getPage } from '@/services';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'INNOVATION LAB – botspot',
};

export default async function InnovationLab() {
  const page = await getPage('innovation-lab');
  if (!page) return notFound();

  const blocks = page.block_data;

  return (
    <main className="">
      {blocks && <WPBlocks blocks={blocks} />}

      <FeedbackForm defaultTopic="Innovation Lab" />
    </main>
  );
}
