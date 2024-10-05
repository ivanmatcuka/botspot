'use client';

import { useEffect, useState } from 'react';
import { WP_REST_API_Posts } from 'wp-types';
import { getPost } from '@/services/blogService';
import { Box, Container, Skeleton } from '@mui/material';

export default function Blog({ params }: { params: { id: string } }) {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<WP_REST_API_Posts[number] | undefined>();

  useEffect(() => {
    if (!params.id) return;
    setLoading(true);
    getPost(+params.id)
      .then((data) => {
        setPost(data);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) <Skeleton variant="rounded" height={360} />;
  if (!post?.content) return null;

  return (
    <Container maxWidth="xl">
      <Box
        my={{ xs: 8, md: 15 }}
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </Container>
  );
}
