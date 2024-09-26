import { MainBlock } from '../components/MainBlock/MainBlock';
import { Button } from '../components/Button/Button';
import { Typography } from '@mui/material';
import { Tile } from '../components/Tile/Tile';
import Image from 'next/image';
import { GalleryTile } from '../components/GalleryTile/GalleryTile';
import { SecondaryBlock } from '../components/SecondaryBlock/SecondaryBlock';

export default function InnovationLab() {
  return (
    <main className="">
      <SecondaryBlock
        assetUrl="/img/banners/innovation-lab.png"
        subline="Our Innovation Lab operates as an interface between research and industrial production, assessing Custom Solutions and Special Requests."
        headline="Innovation Lab"
        primaryCta={<Button variant="primary">Contact Innovation Lab</Button>}
        secondaryCta={<Button variant="secondary">Visit Blog</Button>}
      />

      <MainBlock
        headline="We lead in innovation with advanced 3D scanning technology, delivering state-of-the-art solutions."
        subline="How We Drive Innovation"
      />

      <Tile headline="Internal R&D">
        <Typography variant="body1">
          A current focus of our development work is the qualified and
          repeatable calibration of full-body scanning systems, rising to the
          related challenge of ensuring millimeter-accurate measurements and
          establishing universal standards in this field.
        </Typography>
      </Tile>
      <Tile headline="Marketing Ready 3D Models">
        <Typography variant="body1">
          Use our efficient scanning solutions for creating high volume
          marketing-ready 3D models, which in many cases do not require any
          post-processing. Our detailed 3D scans provide the perfect basis for
          any commercial application.
        </Typography>
      </Tile>
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
          disableGutter
        />
      </GalleryTile>
    </main>
  );
}
