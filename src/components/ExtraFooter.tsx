import { PageContainer, SecondaryBlock } from '@botspot/ui';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

const EMAIL = 'career@botspot.de';

export const ExtraFooter = () => (
  <Box bgcolor="grey.100" mt="auto" overflow="auto" py={10}>
    <PageContainer mb={0} mt={0}>
      <SecondaryBlock
        sublineElement={
          <Typography variant="body1">
            Just send us an email at 
            <Link
              className="hover:underline text-primary-main"
              href={`mailto:${EMAIL}`}
              prefetch={false}
            >
              {EMAIL}
            </Link>{' '}
            to see if we can find the right fit.
          </Typography>
        }
        headline="Can’t find a suitable position for you?"
      />
    </PageContainer>
  </Box>
);
