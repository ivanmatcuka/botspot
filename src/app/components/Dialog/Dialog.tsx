'use client';

import { Dialog as MuiDialog } from '@mui/material';
import { DialogTitle as MuiDialogTitle } from '@mui/material';
import { DialogContent as MuiDialogContent } from '@mui/material/';
import { FC, PropsWithChildren, ReactEventHandler } from 'react';

type DialogProps = {
  open: boolean;
  onClose: ReactEventHandler;
  title?: string;
};
export const Dialog: FC<PropsWithChildren<DialogProps>> = ({
  title,
  children,
  open,
}) => {
  return (
    <MuiDialog maxWidth="md" open={open} fullWidth>
      {title && (
        <>
          <MuiDialogTitle className="md:hidden" component="h2" variant="h3">
            {title}
          </MuiDialogTitle>
          <MuiDialogTitle className="hidden md:block" variant="h2">
            {title}
          </MuiDialogTitle>
        </>
      )}
      <MuiDialogContent>{children}</MuiDialogContent>
    </MuiDialog>
  );
};
