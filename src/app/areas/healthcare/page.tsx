import { MainBlock } from '../../components/MainBlock/MainBlock';
import { Button } from '../../components/Button/Button';
import { Typography } from '@mui/material';
import { SecondaryBlock } from '../../components/SecondaryBlock/SecondaryBlock';
import { Tile } from '../../components/Tile/Tile';
import { FeedbackForm } from '../../components/FeedbackForm/FeedbackForm';
import Image from 'next/image';

export default function Healthcare() {
  return (
    <main className="">
      <SecondaryBlock
        assetUrl="/img/areas/healthcare/banner.png"
        subline="Content has yet to be added. Content has yet to be added. Content has yet to be added."
        headline="Health Care"
      />

      <MainBlock headline="Content has yet to be added." subline="Insight" />

      <MainBlock
        headline="New therapeutic approaches, improved diagnostics and state-of-the-art  prosthetics provided with botspot 3D scanning solutions."
        subline="Health Care"
      />

      <Tile headline="MedReality">
        <Image
          src="/img/areas/healthcare/1.png"
          alt="MedReality"
          width={700}
          height={400}
          style={{ width: '100%' }}
        />
        <Typography variant="body1" my={2}>
          Our partners from MedReality use our Scanning Solutions optimized for
          pathology, to provide clinicians and surgeons with medical data.
        </Typography>
        <Button variant="primary">Read Article</Button>
      </Tile>
    </main>
  );
}
