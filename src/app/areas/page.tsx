import { FeedbackForm } from '@/components/FeedbackForm';
import { Banner, MainBlock, PageContainer, SkeletonVideo } from '@botspot/ui';

export default function Areas() {
  return (
    <main className="">
      <Banner
        mediaBlockOptions={{
          assetUrl: '/img/banners/areas.webp',
        }}
        primary={{
          href: '/areas/commercial',
          value: 'Commercial Applications',
        }}
        secondary={{
          href: '/areas/custom-solutions',
          value: 'Custom Solutions',
        }}
        headline="AREAS OF USE"
        sublineElement="Potential areas of use are as versatile as our 3D Scanners. We have delivered commercial, industrial and custom solutions in order to exceed our clients’  needs."
      />

      <PageContainer mt={{ md: 15, xs: 10 }}>
        <SkeletonVideo videoSrc="/videos/areas-demo.mp4" autoPlay loop muted />
      </PageContainer>

      <PageContainer mt={{ md: 15, xs: 10 }}>
        <MainBlock
          cta={{
            href: '/areas/commercial',
            value: 'See Commercial Applications',
            variant: 'primary',
          }}
          headline="Reduce your return rates and offer your customers an astonishing quality of product visualization with the help of 3D technology."
          subAssetUrl="/img/areas/1.png"
          subline="Commercial"
        />
      </PageContainer>

      <PageContainer mt={{ md: 15, xs: 10 }}>
        <MainBlock
          cta={{
            href: '/areas/industrial',
            value: 'See Industrial Applications',
            variant: 'primary',
          }}
          headline="Benefit from accelerated workflows thanks to reverse engineering and the  most efficient quality control in the context of Industry 4.0."
          subAssetUrl="/img/areas/2.png"
          subline="Industrial"
        />
      </PageContainer>

      <PageContainer mt={{ md: 15, xs: 10 }}>
        <MainBlock
          cta={{
            href: '/areas/custom-solutions',
            value: 'See Custom Solutions',
            variant: 'primary',
          }}
          headline="Create bespoke solutions with our 3D scanners, offering accurate, customized models to fit your unique specifications."
          subAssetUrl="/img/areas/4.png"
          subline="Custom Solutions"
        />
      </PageContainer>

      <FeedbackForm />
    </main>
  );
}
