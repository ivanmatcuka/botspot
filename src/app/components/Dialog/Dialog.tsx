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
    <MuiDialog open={open} fullWidth maxWidth="md">
      {title && (
        <>
          <MuiDialogTitle variant="h3" className="md:hidden" component="h2">
            {title}
          </MuiDialogTitle>
          <MuiDialogTitle variant="h2" className="hidden md:block">
            {title}
          </MuiDialogTitle>
        </>
      )}
      <MuiDialogContent>{children}</MuiDialogContent>
    </MuiDialog>
  );
};
