import React from "react";

const Seo = () => {
	return (
		<>
			<title>Keegan Fargher - Software Engineer</title>
			<meta name="title" content="Keegan Fargher - Full Stack .NET Software Engineer" />
			<meta name="keywords" content="keegan, keegans website" />
			<meta
				name="description"
				content="Full stack .NET Core and React Native engineer working at Netgen Custom Software"
			/>

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://keeganfargher.co.za" />
			<meta property="og:title" content="Keegan Fargher - Software Engineer" />
			<meta
				property="og:description"
				content="Full stack .NET Core and React Native engineer working at Netgen Custom Software"
			/>
			<meta property="og:image" content="https://i.ibb.co/yNpWJ6y/asd.png" />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://keeganfargher.co.za/" />
			<meta property="twitter:title" content="Keegan Fargher - Software Engineer" />
			<meta
				property="twitter:description"
				content="Full stack .NET Core and React Native engineer working at Netgen Custom Software"
			/>
			<meta property="twitter:image" content="https://i.ibb.co/yNpWJ6y/asd.png" />
		</>
	);
};

export default React.memo(Seo);
