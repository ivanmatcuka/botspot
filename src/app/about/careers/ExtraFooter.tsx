import { Box, Typography } from '@mui/material';
import Link from 'next/link';

import { PageContainer } from '@/components/PageContainer';
import { SecondaryBlock } from '@/components/SecondaryBlock/SecondaryBlock';


const EMAIL = 'career@botspot.de';

export const ExtraFooter = () => (
  <Box bgcolor="grey.100" mt="auto" overflow="auto" py={10}>
    <PageContainer mb={0} mt={0}>
      <SecondaryBlock
        headline="Can’t find a suitable position for you?"
        sublineElement={
          <Typography variant="body1">
            Just send us an email at 
            <Link
              className="hover:underline text-primary-main"
              href={`mailto:${EMAIL}`}
            >
              {EMAIL}
            </Link>{' '}
            to see if we can find the right fit.
          </Typography>
        }
      />
    </PageContainer>
  </Box>
);
