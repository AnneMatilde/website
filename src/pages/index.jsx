import React from 'react';
import { Container, Image, Text, Card, AspectRatio, Grid } from 'theme-ui';

const index = () => {
  return (
    <Container variant="containers.normal">
      <Grid columns="1fr 1fr" gap="65px">
        <AspectRatio ratio={16/9}>
          <Image src="/images/Lent_mockup.jpg"
            sx={{objectFit: 'cover'}}
          />
        </AspectRatio>
        <AspectRatio ratio={1/1}>
          <Image src="/images/Lent_mockup.jpg"
            sx={{objectFit: 'cover'}}
          />
        </AspectRatio>
        <AspectRatio ratio={4/6}>
          <Image src="/images/Lent_mockup.jpg"
            sx={{objectFit: 'cover'}}
          />
        </AspectRatio>
        <AspectRatio ratio={4/6}>
          <Image src="/images/Lent_mockup.jpg"
            sx={{objectFit: 'cover'}}
          />
        </AspectRatio>
      </Grid>
    </Container>
  );
};

export default index;
