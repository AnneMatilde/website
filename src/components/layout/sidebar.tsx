import React from 'react';
import { Box } from 'theme-ui';
import { Link } from '../link';

export const Sidebar: React.FC = () => (
  <Box
    sx={{
      bg: 'text',
      position: 'fixed',
      minHeight: '100vh',
      right: 0,
      top: 0,
      color: 'secondary',
      py: 6,
      pr: 6,
      '>a': {
        fontFamily: 'heading',
        color: 'white',
        textDecoration: 'none',
        display: 'block',
        fontSize: 5,
        px: 5,
      },
    }}
  >
    <Link href="/">Prosjekter</Link>
    <Link href="/about">Om meg</Link>
    <Box
      sx={{
        py: 3,
        '>a': {
          fontFamily: 'heading',
          color: 'white',
          textDecoration: 'none',
          display: 'block',
          fontSize: 2,
          px: 5,
          py: 1,
        },
      }}
    >
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/annematildefjeldstad/"
      >
        LINKEDIN
      </a>
      <a href="mailto:hei@annematilde.no">HEI@ANNEMATILDE.NO</a>
      <a href="tel:+4791519300">+47 915 19 300</a>
    </Box>
  </Box>
);
