import sendgrid from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";
import personalInfo from "../../utils/constants/personalInfo";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

type Data = {
	name: string;
	email: string;
	message: string;
};

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
	const data = req.body as Data;

	try {
		await sendgrid.send({
			to: personalInfo.email,
			from: process.env.SENDGRID_FROM!,
			subject: `Message from portfolio`,
			html: `<div>${JSON.stringify(data)}}</div>`,
		});

		res.status(200);
	} catch (error) {
		res.status(500).json("There was an error sending your mail 🤔");
	} finally {
		res.end();
	}
}

export default sendEmail;
