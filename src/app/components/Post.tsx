import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

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
    alignItems="flex-end"
    className="relative rounded-lg text-white overflow-hidden h-full min-h-[360px]"
    display="flex"
  >
    <Box
      alignItems="center"
      className="bg-common-black bg-opacity-80 w-full text-center z-10"
      display="flex"
      flexDirection="column"
      gap={1}
      p={2}
    >
      <Typography className="line-clamp-2" mb={excerpt ? 0 : 1} variant="h4">
        {title}
      </Typography>
      {excerpt && (
        <Typography
          className="line-clamp-3"
          component="div"
          dangerouslySetInnerHTML={{ __html: excerpt }}
          mb={1}
          variant="body1"
        />
      )}
      {cta}
    </Box>
    {featuredImage && (
      <Image
        alt=""
        className={`w-full h-full absolute inset-0 ${objectFit === 'cover' ? 'object-cover' : 'object-contain'} object-top`}
        height={360}
        quality={100}
        src={featuredImage}
        width={310}
      />
    )}
  </Box>
);
