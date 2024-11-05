import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type IconLinkProps = {
  href: string;
  alt: string;
};
export const IconLink: FC<IconLinkProps> = ({ href, alt }) => (
  <Box position="relative">
    <Image alt={alt} height={32} src={`link_${alt}.svg`} width={32} />
    <Link
      className="absolute inset-0 opacity-0 hover:opacity-100"
      href={href}
      target="_blank"
    >
      <Image alt={alt} height={32} src={`white_link_${alt}.svg`} width={32} />
    </Link>
  </Box>
);
