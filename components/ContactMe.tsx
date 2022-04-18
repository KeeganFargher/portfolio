import React from "react";
import { Heading, Stack } from "@chakra-ui/react";
import ContactMeForm from "./ContactMeForm";

const ContactMe = () => {
	return (
		<>
			<Stack spacing={10} w="100%" alignItems="center" justifyContent="center">
				<Heading fontSize={{ base: "4xl", md: "5xl" }} textAlign="center">
					Keep In Touch.
				</Heading>

				<ContactMeForm />
			</Stack>
		</>
	);
};

export default ContactMe;
