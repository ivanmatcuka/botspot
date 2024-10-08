import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { Button } from '@/app/components/Button/Button';
import { FeedbackForm } from '@/app/components/FeedbackForm/FeedbackForm';
import { Banner } from '@/app/components/Banner/Banner';

export default function Areas() {
  return (
    <main className="">
      <Banner
        mediaBlockOptions={{
          assetUrl: '/img/banners/areas.png',
        }}
        headline="AREAS OF USE"
        subline="Potential Areas of Use are as versatile as our 3D Scanners. We have delivered commercial, industrial and custom solutions in order to exceed our clients’  needs."
        primaryCta={<Button variant="primary">Commercial Applications</Button>}
        secondaryCta={<Button variant="secondary">Custom Solutions</Button>}
      />

      <MainBlock
        subline="Commercial"
        headline="Reduce your return rates and offer your customers an astonishing quality of product visualization with the help of 3D technology."
        cta={<Button variant="primary">See Commercial Applications</Button>}
        subAssetUrl="/img/areas/1.png"
      />

      <MainBlock
        subline="Industrial"
        headline="Benefit from accelerated workflows thanks to reverse engineering and the  most efficient quality control in the context of Industry 4.0."
        cta={<Button variant="primary">See Industrial Applications</Button>}
        subAssetUrl="/img/areas/2.png"
      />

      <MainBlock
        subline="Health Care"
        headline="Content has yet to be added. Content has yet to be added. Content has yet to be added."
        cta={<Button variant="primary">Request In-House Scan Service</Button>}
        subAssetUrl="/img/areas/3.png"
      />

      <MainBlock
        subline="Custom Solutions"
        headline="Content has yet to be added. Content has yet to be added. Content has yet to be added."
        cta={<Button variant="primary">Request In-House Scan Service</Button>}
        subAssetUrl="/img/areas/4.png"
      />

      <FeedbackForm />
    </main>
  );
}
