import NextLink from 'next/link';
import React from 'react';
import { LinkProps, Link as ThemeUiLink } from 'theme-ui';

export const Link = React.forwardRef<
  HTMLAnchorElement,
  LinkProps & { href: string }
>(({ href, ...props }, ref) => (
  <NextLink href={href}>
    <ThemeUiLink ref={ref} {...props} />
  </NextLink>
));
