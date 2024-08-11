import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					as="style"
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
					rel="stylesheet preload prefetch"
				/>
				<link
					as="style"
					href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap"
					rel="stylesheet preload prefetch"
				/>
				<meta name="theme-color" content="black" />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
