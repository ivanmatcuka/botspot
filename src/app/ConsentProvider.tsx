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
        title="We value your privacy."
        onClose={() => setIsOpen(false)}
      >
        <Box
          columnGap={3}
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          flexWrap="wrap"
          justifyContent={{ xs: 'center', md: 'flex-end' }}
          maxWidth={600}
          mx="auto"
          rowGap={3}
          width="100%"
        >
          <Typography component="p" mt={3} variant="body1">
            We use cookies on this website to enhance your user experience. By
            clicking “I agree”, you are giving your consent for us to set
            cookies.
          </Typography>
          <Typography component="p" mb={3} variant="body1">
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
