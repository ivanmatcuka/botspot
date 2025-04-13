'use client';

import { CustomPost, getPeople } from '@/services';
import { getFeaturedImageUrl } from '@/utils';
import { Grid, LoadingSkeletons, Post } from '@botspot/ui';
import { FC, useEffect, useState } from 'react';

export const People: FC = () => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState<CustomPost[]>([]);

  useEffect(() => {
    setLoading(true);
    getPeople()
      .then(({ data }) => {
        setPeople(data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Grid mt={2} spacing={{ lg: 5, md: 3, xs: 2 }} xs={12} container>
      {loading ? (
        <LoadingSkeletons count={12} />
      ) : (
        people.map((person) => (
          <Grid key={person.id} lg={4} md={6} xs={12} item>
            <Post
              excerpt={person.excerpt.rendered}
              featuredImage={getFeaturedImageUrl(person)}
              title={person.title.rendered}
            />
          </Grid>
        ))
      )}
    </Grid>
  );
};
