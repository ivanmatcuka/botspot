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
    <Typography variant="body1" mb={2}>
      {subline}
    </Typography>
    <Typography variant="h2" mb={cta ? 4 : 0}>
      {headline}
    </Typography>
    {cta}
    {subAssetUrl && (
      <Image
        src={subAssetUrl}
        width={800}
        height={800}
        alt=""
        className="object-cover w-full h-auto pt-[48px] min-h-[240px]"
        quality={100}
      />
    )}
  </Box>
);
