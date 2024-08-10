import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import customTheme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
	const [showChild, setShowChild] = useState(false);

	useEffect(() => {
		setShowChild(true);
	}, []);

	if (!showChild) {
		return null;
	}

	if (typeof window === "undefined") {
		return <></>;
	}

	return (
		<>
			<ChakraProvider resetCSS theme={customTheme}>
				<GlobalStyle>
					<Component {...pageProps} />
				</GlobalStyle>
			</ChakraProvider>
		</>
	);
}

export default MyApp;
