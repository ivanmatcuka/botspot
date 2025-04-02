import { Box, GridProps, Typography } from '@mui/material';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

type MainBlockProps = {
  headline?: string;
  subline?: string;
  cta?: ReactNode;
  subAssetUrl?: string;
  botomless?: boolean;
  mt?: GridProps['mt'];
};
export const MainBlock: FC<MainBlockProps> = ({
  headline,
  subline,
  cta,
  subAssetUrl,
}) => (
  <Box textAlign={{ xs: 'center', md: 'left' }}>
    <Typography mb={2} variant="body1">
      {subline}
    </Typography>
    <Typography mb={cta ? 4 : 0} variant="h2">
      {headline}
    </Typography>
    {cta}
    {subAssetUrl && (
      <Image
        alt=""
        className="object-cover w-full h-auto pt-[48px] min-h-[240px]"
        height={800}
        quality={80}
        src={subAssetUrl}
        width={800}
      />
    )}
  </Box>
);
