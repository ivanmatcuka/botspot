'use client';

import { Snackbar as MuiSnackbar, SnackbarContent } from '@mui/material';
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

export const SnackbarContext = createContext<{
  showSnackbar: (
    message: string,
    status: 'success' | 'error',
    duration?: number,
  ) => void;
}>({ showSnackbar: () => ({}) });

export const SnackbarProvider: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('success');
  const [duration, setDuration] = useState(3000);

  const showSnackbar = (
    message: string,
    status: 'success' | 'error',
    duration = 3000,
  ) => {
    setOpen(true);
    setMessage(message);
    setStatus(status);
    setDuration(duration);
    setTimeout(() => setOpen(false), duration);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <MuiSnackbar autoHideDuration={duration} open={open}>
        <SnackbarContent
          className={`${status === 'success' ? '!bg-primary-main' : '!bg-error-main'}`}
          message={message}
        />
      </MuiSnackbar>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  return useContext(SnackbarContext);
};
