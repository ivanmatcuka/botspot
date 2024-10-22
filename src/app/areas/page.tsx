import { PageContainer } from '../components/PageContainer/PageContainer';

import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { Button } from '@/app/components/Button/Button';
import { FeedbackForm } from '@/app/components/FeedbackForm/FeedbackForm';
import { Banner } from '@/app/components/Banner/Banner';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AREAS OF USE – botspot',
};

export default function Areas() {
  return (
    <main className="">
      <Banner
        mediaBlockOptions={{
          assetUrl: '/img/banners/areas.png',
        }}
        headline="AREAS OF USE"
        subline="Potential Areas of Use are as versatile as our 3D Scanners. We have delivered commercial, industrial and custom solutions in order to exceed our clients’  needs."
        primaryCta={
          <Button variant="primary" href="/areas/commercial">
            Commercial Applications
          </Button>
        }
        secondaryCta={
          <Button variant="secondary" href="/areas/custom-solutions">
            Custom Solutions
          </Button>
        }
      />

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          subline="Commercial"
          headline="Reduce your return rates and offer your customers an astonishing quality of product visualization with the help of 3D technology."
          cta={
            <Button variant="primary" href="/areas/commercial">
              See Commercial Applications
            </Button>
          }
          subAssetUrl="/img/areas/1.png"
        />
      </PageContainer>

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          subline="Industrial"
          headline="Benefit from accelerated workflows thanks to reverse engineering and the  most efficient quality control in the context of Industry 4.0."
          cta={
            <Button variant="primary" href="/areas/industrial">
              See Industrial Applications
            </Button>
          }
          subAssetUrl="/img/areas/2.png"
        />
      </PageContainer>

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          subline="Custom Solutions"
          headline="Content has yet to be added. Content has yet to be added. Content has yet to be added."
          cta={
            <Button variant="primary" href="/areas/custom-solutions">
              See Custom Solutions
            </Button>
          }
          subAssetUrl="/img/areas/4.png"
        />
      </PageContainer>

      <FeedbackForm />
    </main>
  );
}
