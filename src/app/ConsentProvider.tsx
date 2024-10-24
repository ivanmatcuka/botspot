'use client';

import { Dialog } from './components/Dialog/Dialog';
import { Button } from './components/Button/Button';

import { Box, Typography } from '@mui/material';
import { getCookie, setCookie } from 'cookies-next';
import { FC, PropsWithChildren, useState } from 'react';

export const ConsentProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(getCookie('consent') !== 'true');

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title="We value your privacy."
      >
        <Box
          width="100%"
          maxWidth={600}
          mx="auto"
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          flexWrap="wrap"
          columnGap={3}
          rowGap={3}
          justifyContent={{ xs: 'center', md: 'flex-end' }}
        >
          <Typography variant="body1" component="p" mt={3}>
            We use cookies on this website to enhance your user experience. By
            clicking “I agree”, you are giving your consent for us to set
            cookies.
          </Typography>
          <Typography variant="body1" component="p" mb={3}>
            We use cookies on this website to enhance your user experience. By
            clicking “I agree”, you are giving your consent for us to set
            cookies.
          </Typography>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            I decline
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setCookie('consent', 'true');
              setIsOpen(false);
            }}
          >
            I agree
          </Button>
        </Box>
      </Dialog>
      {children}
    </>
  );
};
