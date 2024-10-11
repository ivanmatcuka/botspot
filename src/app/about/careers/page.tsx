import { Jobs } from './Jobs';

import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { getJobs } from '@/services/blogService';
import { MainBlock } from '@/app/components/MainBlock/MainBlock';
import { MediaBlock } from '@/app/components/MediaBlock/MediaBlock';
import { PageContainer } from '@/app/components/PageContainer/PageContainer';

import { Box, Container, Grid, Typography } from '@mui/material';

export default async function Careers() {
  const { data } = await getJobs();

  return (
    <main className="">
      <MediaBlock assetUrl="/img/banners/careers.png" />

      <Grid
        container
        maxWidth="xl"
        justifyContent="flex-end"
        mx="auto"
        mt={{ xs: 2, sm: 3 }}
        px={3}
      >
        <Grid
          item
          textAlign={{ xs: 'center', md: 'left' }}
          xs={12}
          md={7}
          xl={6}
          ml="auto"
        >
          <Typography variant="h2">Careers</Typography>
          <Typography
            variant="body1"
            mb={{ xs: 3, sm: 2 }}
            mt={{ xs: 1, sm: 0.5 }}
          >
            We are always on the lookout for young talents as well as seasoned
            professionals.
          </Typography>
        </Grid>
      </Grid>

      <PageContainer>
        <MainBlock
          headline="We strive for innovative spirit and foster our open corporate culture. Feel free to check our openings below."
          subline="Open Positions"
        />
      </PageContainer>

      <Jobs data={data} />

      <Box
        bgcolor="grey.100"
        py={{ xs: 5, md: 10 }}
        overflow="auto"
        mt={{ xs: 5, md: 10 }}
      >
        <PageContainer>
          <SecondaryBlock
            subline="Just send us an email at career@botspot.de to see if we can find the right fit."
            headline="Can’t find a suitable position for you?"
          />
        </PageContainer>
      </Box>
    </main>
  );
}
