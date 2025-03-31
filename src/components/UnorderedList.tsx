import { List as MuiList } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export const UnorderedList: FC<PropsWithChildren> = ({ children }) => {
  return <MuiList>{children}</MuiList>;
};
