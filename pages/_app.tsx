import React from 'react';
import type { AppProps } from 'next/app';

import Theme from '../utils/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
