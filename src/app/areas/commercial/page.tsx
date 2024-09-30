import { Typography } from '@mui/material';
import Image from 'next/image';

import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { Button } from '@/app/components/Button/Button';
import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { Tile } from '@/app/components/Tile/Tile';
import { GalleryTile } from '@/app/components/GalleryTile/GalleryTile';

export default function Commercial() {
  return (
    <main className="">
      <SecondaryBlock
        assetUrl="/img/areas/commercial/banner.png"
        subline="Reduce your return rates and offer your customers an astonishing quality of product visualization with the help of 3D technology."
        headline="Commercial Areas of Use"
        banner
      />

      <MainBlock
        headline="With new emerging technologies, using digital assets is more important than ever before."
        subline="Insight"
      />

      <Tile headline="Marketing Ready 3D Models">
        <Typography variant="body1">
          Use our efficient scanning solutions for creating high volume
          marketing-ready 3D models, which in many cases do not require any
          post-processing. Our detailed 3D scans provide the perfect basis for
          any commercial application.
        </Typography>
      </Tile>

      <MainBlock
        headline="Product visualization is an essential part of sales promotion in digital retail – 3D models open up completely new possibilities for product display."
        subline="E Commerce"
      />

      <Tile headline="Inuikii">
        <Image
          src="/img/areas/commercial/1.png"
          alt="Inuikii"
          width={700}
          height={400}
          style={{ width: '100%' }}
        />
        <Typography variant="body1" mt={2}>
          “Working with botspot is exactly what you want from a partner. The
          botspot team knows their trade, is open to new things and implements
          customer wishes with a high degree of precision and efficiency. Every
          project with botspot is a complete success!”
        </Typography>
      </Tile>
      <Tile headline="Digital Furnishing">
        <Image
          src="/img/areas/commercial/2.png"
          alt="Digital Furnishing"
          width={700}
          height={400}
          style={{ width: '100%' }}
        />
        <Typography variant="body1" mt={2}>
          In order to give an impression of the interplay of different furniture
          pieces or styles before the purchase, pioneering stores enable digital
          furnishing of real rooms with the help of mobile apps. This allows to
          check infinite furnishing options, while colors and textures of
          individual 3D models can be easily changed.
        </Typography>
      </Tile>

      <MainBlock
        headline="Transform VR experiences with our 3D scanners, delivering precise, high-fidelity models."
        subline="Virtual Reality"
      />

      <Tile headline="Vyking">
        <Image
          src="/img/areas/commercial/3.png"
          alt="Vyking"
          width={700}
          height={400}
          style={{ width: '100%' }}
        />
        <Typography variant="body1" my={2}>
          With the help of 3D foot tracking, Vyking’s app makes it possible to
          try on shoes directly on the smartphone. For this innovative company,
          we digitized numerous shoes which were integrated into the app and are
          now available for a digital try-on.
        </Typography>
        <Button variant="primary">Test Virtual Try-On</Button>
      </Tile>

      <MainBlock
        headline="Bring cultural elements and stage designs to life with unparalleled detail and realism."
        subline="Culture"
      />

      <Tile headline="Opera & Scenic Spaces">
        <Image
          src="/img/areas/commercial/4.png"
          alt="Opera & Scenic Spaces"
          width={700}
          height={400}
          style={{ width: '100%' }}
        />
        <Typography variant="body1" mt={2}>
          Berlin based artist Martin Werthmann designed the set for the german
          opera “The Dead City” performed at Theater Bremen. An integral part of
          this outstanding set were several realistic, human-sized figurines of
          women. For these 3D-printed figurines a model was scanned by botspot
          3D Scanners.
        </Typography>
      </Tile>

      <GalleryTile imgUrl="/img/areas/commercial/5.png">
        <SecondaryBlock
          subline="Versatile and powerful, our 3D Object is ideal for commercial applications."
          headline="We recommend our 3D Object Scanner"
          primaryCta={
            <Button variant="primary">Explore 3D Object Scanner</Button>
          }
          hasParent
        />
      </GalleryTile>
    </main>
  );
}
