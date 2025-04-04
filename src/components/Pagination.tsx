'use client';

import {
  Box,
  Pagination as MuiPagination,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { FC, ReactEventHandler } from 'react';

import { Button } from '@botspot/ui';

type PaginationProps = {
  count: number;
  perPage: number;
  setPage: (page: number) => void;
};
export const Pagination: FC<PaginationProps> = ({
  count,
  perPage,
  setPage,
}) => {
  const { breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.down('xl'));

  return (
    <Box>
      <MuiPagination
        boundaryCount={matches ? 0 : 1}
        color="primary"
        count={count}
        renderItem={({ onClick, page, type, selected, disabled }) => {
          const contentType: Record<
            typeof type,
            {
              buttonText: string;
              onClick?: ReactEventHandler;
            }
          > = {
            'end-ellipsis': {
              buttonText: '...',
            },
            'start-ellipsis': {
              buttonText: '...',
            },
            first: {
              buttonText: '<<',
              onClick: () => setPage(1),
            },
            last: {
              buttonText: '>>',
              onClick: () => setPage(Math.ceil(count / perPage)),
            },
            next: {
              buttonText: '>',
              onClick: () => setPage((page ?? 1) + 1),
            },
            previous: {
              buttonText: '<',
              onClick: () => setPage((page ?? 1) - 1),
            },
            page: {
              buttonText: `${page}`,
              onClick,
            },
          };

          if (type !== 'page') {
            return (
              <Button disabled={disabled} variant="secondary" onClick={onClick}>
                {contentType[type].buttonText}
              </Button>
            );
          }

          return (
            <Button
              disabled={disabled}
              variant={selected ? 'primary' : 'secondary'}
              onClick={onClick}
            >
              {page}
            </Button>
          );
        }}
        shape="rounded"
        siblingCount={matches ? 0 : 1}
        variant="outlined"
        onChange={(_, page) => setPage(page)}
      />
    </Box>
  );
};
