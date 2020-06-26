import React from 'react';
import { Container, Text, Heading } from 'theme-ui';

const index = () => {
  return (
    <Container variant="containers.normal">
      <Text sx={{fontSize: 2}}>Dette er forsiden!</Text>
      <Heading as="h2">Hei</Heading>
    </Container>
  );
};

export default index;
