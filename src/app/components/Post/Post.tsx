import { Box, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Button } from '../Button/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type PostProps = {
  title: string;
  excerpt?: string;
  cta?: ReactNode;
  featuredImage?: string;
};

export const Post: FC<PostProps> = ({ title, cta, excerpt, featuredImage }) => {
  const { push } = useRouter();

  return (
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
        {cta}
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
};
