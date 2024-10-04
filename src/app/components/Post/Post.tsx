import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { Button } from '../Button/Button';
import Image from 'next/image';

type PostProps = {
  title: string;
  excerpt?: string;
  link?: string;
  featuredImage?: string;
};

export const Post: FC<PostProps> = ({
  title,
  link,
  excerpt,
  featuredImage,
}) => (
  <Box
    className="relative rounded-lg text-white overflow-hidden h-full min-h-[360px]"
    display="flex"
    alignItems="flex-end"
  >
    <Box
      className="bg-common-black bg-opacity-80 break-all w-full text-center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={2}
      gap={1}
    >
      <Typography variant="h4">{title}</Typography>
      {excerpt && (
        <Typography
          variant="body1"
          mb={1}
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      )}
      {link && (
        <Button variant="secondary" onClick={() => window.open(link)}>
          Read Full Story
        </Button>
      )}
      {featuredImage && (
        <Image
          height={360}
          width={310}
          alt=""
          src={featuredImage}
          className="w-full h-full absolute inset-0 z-[-1] object-cover object-top"
        />
      )}
    </Box>
  </Box>
);
