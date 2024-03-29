export const theme = {
  initialColorModeName: 'light',
  useColorSchemeMediaQuery: true,
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: '"EB Garamond", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", serif',
    heading:
      'Syne, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 80],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#000',
    secondary: '#6992a2',
    white: '#fff',
    backdrop: 'rgba(0, 0, 0, 0.1)',
    // modes: {
    //   dark: {
    //     text: '#244D4D',
    //     background: '#fff',
    //     primary: '#21383F',
    //     secondary: '#D8B2B2',
    //   },
    // },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      letterSpacing: '-2px',
    },
  },
  containers: {
    normal: {
      variant: 'styles.container',
      maxWidth: '1690px',
      padding: '100px',
    },
  },
  cards: {
    primary: {
      height: 700,
      width: 800,
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 5,
    },
    container: {
      m: '0 auto',
    },
    a: {
      color: 'inherit',
      cursor: 'pointer',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
  },
};
