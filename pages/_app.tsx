import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import type { AppProps } from "next/app";
import PlausibleProvider from "next-plausible";
import customTheme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<PlausibleProvider domain={process.env.NEXT_PUBLIC_DOMAIN_NAME ?? "My cool website"}>
			<ChakraProvider resetCSS theme={customTheme}>
				<GlobalStyle>
					<Component {...pageProps} />
				</GlobalStyle>
			</ChakraProvider>
		</PlausibleProvider>
	);
}

export default MyApp;
