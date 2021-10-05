import { Box, Container } from '@theme-ui/components';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Header } from './header';
import { Sidebar } from './sidebar';

export const Layout: React.FC = ({ children }) => {
  const [isMenuOpen, setMenuState] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMenuState(false);
  }, [router.asPath]);
  return (
    <Box>
      <Container sx={{ position: 'relative', minHeight: '100vh' }}>
        {isMenuOpen && (
          <Box
            sx={{
              width: '100%',
              height: '100%',
              top: 0,
              position: 'absolute',
              overflow: 'hidden',
              bg: 'backdrop',
            }}
            onClick={() => setMenuState(false)}
          />
        )}
        <Header onMenuClick={() => setMenuState(!isMenuOpen)} />
        <Container sx={{ px: 5 }}>{children}</Container>
      </Container>
      {isMenuOpen && <Sidebar />}
    </Box>
  );
};
