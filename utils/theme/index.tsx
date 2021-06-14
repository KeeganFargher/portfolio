import { useEffect, useMemo, useState } from 'react';
import { extendTheme, ThemeConfig, ThemeOverride } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

import styles from './styles';
import { presets } from './colours';
import Fonts, { fonts } from './fonts';
import layerStyles from './foundations/layerStyles';
import { ThemeProvider } from './context';
import NextNprogress from 'nextjs-progressbar';

const choc = {
  bg: '#15151E',
  primary: '#2A2A3C',
  secondary: '#3E3E5B'
};

export const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'dark'
};

const Theme = (props: any) => {
  const [brand, setBrand] = useState('indigo');

  const overrides: ThemeOverride = {
    colors: { brand: presets(brand), choc },
    config,
    layerStyles,
    styles,
    fonts
  };
  const theme = extendTheme(overrides);

  useEffect(() => {
    setBrand(window.localStorage.getItem('brand') || 'indigo');
  }, []);

  useEffect(() => {
    window.localStorage.setItem('brand', brand);
  }, [brand]);

  const themeProps = useMemo(
    () => ({
      brand,
      setBrand,
      presets
    }),
    [brand]
  );
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider value={themeProps}>
        <Fonts />
        <NextNprogress
          color={presets(brand)[500]}
          startPosition={0.3}
          stopDelayMs={200}
          height={2}
        />
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default Theme;
