import { SecondaryBlock } from '@/app/components/SecondaryBlock/SecondaryBlock';
import { PageContainer } from '@/app/components/PageContainer/PageContainer';

import { Box, Typography } from '@mui/material';
import Link from 'next/link';

const EMAIL = 'career@botspot.de';

export const ExtraFooter = () => {
  return (
    <Box bgcolor="grey.100" py={10} overflow="auto" mt="auto">
      <PageContainer mt={0} mb={0}>
        <SecondaryBlock
          sublineElement={
            <Typography variant="body1">
              Just send us an email at 
              <Link
                href={`mailto:${EMAIL}`}
                className="hover:underline text-primary-main"
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
};
