import React from "react";
import {
	Button,
	Stack,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Box,
	Textarea,
	useToast,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { Formik, FormikHelpers } from "formik";
import axios from "axios";

type Values = {
	email: string;
	name: string;
	message: string;
};

const INITIAL_VALUES: Values = {
	email: "",
	name: "",
	message: "",
};

const FormValidation = Yup.object().shape({
	email: Yup.string().email().required("Your email address is required"),
	name: Yup.string().required("Your name is required"),
	message: Yup.string()
		.required("A message is required")
		.min(2, "Please type at least 2 characters"),
});

const ContactMeForm: React.FC = () => {
	const toast = useToast();

	const onSubmit = async (values: Values, { setSubmitting, resetForm }: FormikHelpers<Values>) => {
		try {
			setSubmitting(true);
			await axios.post("/api/sendgrid", values);

			toast({
				title: "Success!",
				description: "Your message has been sent, thanks! 🥳",
				status: "success",
				duration: 9000,
				isClosable: true,
			});

			resetForm();
		} catch (error) {
			toast({
				title: "That didn't go as planned",
				description: "There was an issue sending your email, is this email address valid?",
				status: "error",
				duration: 9000,
				isClosable: true,
			});
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Formik
			validationSchema={FormValidation}
			initialValues={INITIAL_VALUES}
			validateOnMount
			onSubmit={onSubmit}>
			{({
				handleSubmit,
				handleChange,
				values,
				errors,
				touched,
				isValid,
				isSubmitting,
			}): JSX.Element => (
				<Box>
					<Stack spacing={4} width={{ base: "100%", md: "500px" }}>
						<FormControl isInvalid={errors.name !== undefined && touched.name}>
							<FormLabel htmlFor="name">Name</FormLabel>
							<Input
								autoComplete="name"
								placeholder="Fred Flintstone"
								onChange={handleChange("name")}
								value={values.name}
							/>
							<FormErrorMessage>{errors.name}</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={errors.email !== undefined && touched.email}>
							<FormLabel htmlFor="email">Email</FormLabel>
							<Input
								autoComplete="email"
								placeholder="example@gmail.com"
								onChange={handleChange("email")}
								value={values.email}
							/>
							<FormErrorMessage>{errors.email}</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={errors.message !== undefined && touched.message}>
							<FormLabel htmlFor="message">Message</FormLabel>
							<Textarea
								placeholder="I think your website is really cool..."
								onChange={handleChange("message")}
								value={values.message}
							/>
							<FormErrorMessage>{errors.message}</FormErrorMessage>
						</FormControl>
					</Stack>

					<Button
						mt={4}
						colorScheme="brand"
						isLoading={isSubmitting}
						isDisabled={!isValid}
						type="submit"
						onClick={() => handleSubmit()}>
						Submit
					</Button>
				</Box>
			)}
		</Formik>
	);
};

export default ContactMeForm;
