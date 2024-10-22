import { Box, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import Image from 'next/image';

type PostProps = {
  title: string;
  excerpt?: string;
  cta?: ReactNode;
  featuredImage?: string;
  objectFit?: 'cover' | 'contain';
};

export const Post: FC<PostProps> = ({
  title,
  cta,
  excerpt,
  featuredImage,
  objectFit = 'cover',
}) => (
  <Box
    className="relative rounded-lg text-white overflow-hidden h-full min-h-[360px]"
    display="flex"
    alignItems="flex-end"
  >
    <Box
      className="bg-common-black bg-opacity-80 w-full text-center z-10"
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={2}
      gap={1}
    >
      <Typography variant="h4" className="line-clamp-1">
        {title}
      </Typography>
      {excerpt && (
        <Typography
          variant="body1"
          mb={1}
          className="line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: excerpt,
          }}
        />
      )}
      {cta}
    </Box>
    {featuredImage && (
      <Image
        height={360}
        width={310}
        alt=""
        src={featuredImage}
        className={`w-full h-full absolute inset-0 ${objectFit === 'cover' ? 'object-cover' : 'object-contain'} object-top`}
        quality={100}
      />
    )}
  </Box>
);
