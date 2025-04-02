import AreaPost from '../AreaPost';

import { Typography } from '@mui/material';
import { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';

import { Banner } from '@/components/Banner';
import { Button } from '@/components/Button';
import { MainBlock } from '@/components/MainBlock';
import { PageContainer } from '@/components/PageContainer';
import { Tile } from '@/components/Tile';
import { generatePageMetadata } from '@/utils';

const AREA_SLUG = 'areas-commercial';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('commercial');
}

export default function Commercial() {
  return (
    <main className="">
      <Banner
        headline="Commercial Areas of Use"
        mediaBlockOptions={{
          assetUrl: '/img/areas/commercial/banner.png',
        }}
        sublineElement="Reduce your return rates and offer your customers an astonishing quality of product visualization with the help of 3D technology."
      />

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          headline="With new emerging technologies, using digital assets is more important than ever before."
          subline="Insight"
        />
      </PageContainer>

      <Tile headline="Marketing-Ready 3D Models">
        <Typography variant="body1">
          Use our efficient scanning solutions for creating high volume
          marketing-ready 3D models, which in many cases do not require any
          post-processing. Our detailed 3D scans provide the perfect basis for
          any commercial application.
        </Typography>
      </Tile>

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          headline="Product visualization is an essential part of sales promotion in digital retail – 3D models open up completely new possibilities for product display."
          subline="E-commerce"
        />
      </PageContainer>

      <Tile headline="INUIKII">
        <Image
          alt="INUIKII"
          height={400}
          loading="lazy"
          quality={80}
          src="/img/areas/commercial/1.png"
          style={{ width: '100%' }}
          width={700}
        />
        <Typography mt={2} variant="body1">
          “Working with botspot is exactly what you want from a partner. The
          botspot team knows their trade, is open to new things and implements
          customer wishes with a high degree of precision and efficiency. Every
          project with botspot is a complete success!”
        </Typography>
      </Tile>
      <Tile headline="Digital Furnishing">
        <Image
          alt="Digital Furnishing"
          height={400}
          loading="lazy"
          quality={80}
          src="/img/areas/commercial/2.png"
          style={{ width: '100%' }}
          width={700}
        />
        <Typography mt={2} variant="body1">
          In order to give an impression of the interplay of different furniture
          pieces or styles before the purchase, pioneering stores enable digital
          furnishing of real rooms with the help of mobile apps. This allows to
          check infinite furnishing options, while colors and textures of
          individual 3D models can be easily changed.
        </Typography>
      </Tile>

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          headline="Transform VR experiences with our 3D scanners, delivering precise, high-fidelity models."
          subline="Virtual Reality"
        />
      </PageContainer>

      <Tile headline="Vyking">
        <Image
          alt="Vyking"
          height={400}
          loading="lazy"
          quality={80}
          src="/img/areas/commercial/3.png"
          style={{ width: '100%' }}
          width={700}
        />
        <Typography my={2} variant="body1">
          With the help of 3D foot tracking, Vyking’s app makes it possible to
          try on shoes directly on the smartphone. For this innovative company,
          we digitized numerous shoes which were integrated into the app and are
          now available for a digital try-on.
        </Typography>
        <Button
          href="https://www.vyking.io/shoes"
          target="_blank"
          variant="primary"
        >
          Test Virtual Try-On
        </Button>
      </Tile>

      <PageContainer mt={{ xs: 10, md: 15 }}>
        <MainBlock
          headline="Bring cultural elements and stage designs to life with unparalleled detail and realism."
          subline="Culture"
        />
      </PageContainer>

      <Tile headline="Opera & Scenic Spaces">
        <Image
          alt="Opera & Scenic Spaces"
          height={400}
          loading="lazy"
          quality={80}
          src="/img/areas/commercial/4.png"
          style={{ width: '100%' }}
          width={700}
        />
        <Typography mt={2} variant="body1">
          Berlin based artist Martin Werthmann designed the set for the german
          opera “The Dead City” performed at Theater Bremen. An integral part of
          this outstanding set were several realistic, human-sized figurines of
          women. For these 3D-printed figurines a model was scanned by botspot
          3D Scanners.
        </Typography>
      </Tile>

      <Suspense>
        <AreaPost slug={AREA_SLUG} />
      </Suspense>
    </main>
  );
}
