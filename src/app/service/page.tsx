import { FeedbackForm } from '@/components/FeedbackForm';
import { getPage } from '@/services';

import { WPBlocks } from '../../components/WPBlocks';

export default async function Service() {
  const page = await getPage('3d-scan-service');
  const blocks = page?.block_data;

  return (
    <main className="">
      {blocks && <WPBlocks blocks={blocks} />}

      <FeedbackForm defaultTopic="3D Scan Service" />
    </main>
  );
}
