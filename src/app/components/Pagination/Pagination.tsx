'use client';

import { FC, ReactEventHandler } from 'react';
import {
  Box,
  Pagination as MuiPagination,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Button } from '@/app/components/Button/Button';

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
        count={count}
        variant="outlined"
        shape="rounded"
        siblingCount={matches ? 0 : 1}
        boundaryCount={matches ? 0 : 1}
        onChange={(_, page) => setPage(page)}
        color="primary"
        renderItem={({ onClick, page, type, selected, disabled }) => {
          const contentType: Record<
            typeof type,
            {
              buttonText: string;
              onClick?: ReactEventHandler<Element>;
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
              <Button variant="secondary" onClick={onClick} disabled={disabled}>
                {contentType[type].buttonText}
              </Button>
            );
          }

          return (
            <Button
              variant={selected ? 'primary' : 'secondary'}
              onClick={onClick}
              disabled={disabled}
            >
              {page}
            </Button>
          );
        }}
      />
    </Box>
  );
};
