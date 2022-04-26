import type { NextApiRequest, NextApiResponse } from "next";

interface RequestBody {
	sys: Sys;
}

interface Sys {
	id: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	// Check for secret to confirm this is a valid request
	if (req.headers.secret !== process.env.REVALIDATE_SECRET_TOKEN) {
		res.status(401).json({ message: "Invalid token" });
		res.end();
		return;
	}

	const body = JSON.parse(req.body) as RequestBody;

	try {
		await res.unstable_revalidate("/projects");
		await res.unstable_revalidate(`/projects/${body.sys.id}`);

		res.status(200).json({ revalidated: true });
	} catch (err) {
		console.error(err);
		// If there was an error, Next.js will continue
		// to show the last successfully generated page
		res.status(500).send("Error revalidating");
	} finally {
		res.end();
	}
}
