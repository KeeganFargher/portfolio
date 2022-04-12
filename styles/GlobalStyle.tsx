import { Global, css } from "@emotion/react";
import React from "react";

type GlobalStyleProps = {
	children: JSX.Element | JSX.Element[];
};

const GlobalStyle: React.FC<GlobalStyleProps> = ({ children }) => {
	return (
		<>
			<Global
				styles={css`
					::selection {
						background-color: #b794f4;
						color: #fefefe;
					}
					::-moz-selection {
						background: #b794f4;
						color: #fefefe;
					}
					html {
						min-width: 356px;
						min-height: 100vh;
					}
					#__next {
						display: flex;
						flex-direction: column;
						min-height: 100vh;
						background: #000;
					}
				`}
			/>
			{children}
		</>
	);
};

export default GlobalStyle;
