import React from 'react';
import { Box, Flex, Heading, Text } from 'theme-ui';

export const Header: React.FC<{ onMenuClick: () => void }> = ({
  onMenuClick,
}) => {
  return (
    <Flex sx={{ p: 5, alignItems: 'center' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Heading sx={{ fontSize: [5, 6, 8], fontWeight: 'normal' }}>
          Anne Matilde
        </Heading>
        <Text sx={{ fontSize: [3, 4] }}>Digital designer</Text>
      </Box>
      <Box
        sx={{ fontSize: [4, 5, 8], fontFamily: 'heading', cursor: 'pointer' }}
        onClick={onMenuClick}
      >
        + <Text sx={{ textDecoration: 'underline' }}>Menu</Text>
      </Box>
    </Flex>
  );
};
