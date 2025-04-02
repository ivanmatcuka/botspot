import { Banner } from '@/components/Banner';
import { Button } from '@/components/Button';
import { FeedbackForm } from '@/components/FeedbackForm';
import { MainBlock } from '@/components/MainBlock';
import { PageContainer } from '@/components/PageContainer';
import { SkeletonVideo } from '@/components/SkeletonVideo';

export default function Areas() {
  return (
    <main className="">
      <Banner
        headline="AREAS OF USE"
        mediaBlockOptions={{
          assetUrl: '/img/banners/areas.webp',
        }}
        primaryCta={
          <Button href="/areas/commercial" variant="primary">
            Commercial Applications
          </Button>
        }
        secondaryCta={
          <Button href="/areas/custom-solutions" variant="secondary">
            Custom Solutions
          </Button>
        }
        sublineElement="Potential areas of use are as versatile as our 3D Scanners. We have delivered commercial, industrial and custom solutions in order to exceed our clients’  needs."
      />

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <SkeletonVideo videoSrc="/videos/areas-demo.mp4" autoPlay loop muted />
      </PageContainer>

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          cta={
            <Button href="/areas/commercial" variant="primary">
              See Commercial Applications
            </Button>
          }
          headline="Reduce your return rates and offer your customers an astonishing quality of product visualization with the help of 3D technology."
          subAssetUrl="/img/areas/1.png"
          subline="Commercial"
        />
      </PageContainer>

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          cta={
            <Button href="/areas/industrial" variant="primary">
              See Industrial Applications
            </Button>
          }
          headline="Benefit from accelerated workflows thanks to reverse engineering and the  most efficient quality control in the context of Industry 4.0."
          subAssetUrl="/img/areas/2.png"
          subline="Industrial"
        />
      </PageContainer>

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          cta={
            <Button href="/areas/custom-solutions" variant="primary">
              See Custom Solutions
            </Button>
          }
          headline="Create bespoke solutions with our 3D scanners, offering accurate, customized models to fit your unique specifications."
          subAssetUrl="/img/areas/4.png"
          subline="Custom Solutions"
        />
      </PageContainer>

      <FeedbackForm />
    </main>
  );
}
