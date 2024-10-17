import {
  ListItemText,
  ListItem as MuiListItem,
  Typography,
} from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export const UnorderedListItem: FC<PropsWithChildren> = ({ children }) => (
  <MuiListItem>
    <ListItemText>
      <Typography
        display="flex"
        variant="body1"
        lineHeight={2}
        textAlign={{ xs: 'center', md: 'left' }}
      >
        • {children}
      </Typography>
    </ListItemText>
  </MuiListItem>
);
