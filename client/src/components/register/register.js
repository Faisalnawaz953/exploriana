import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { baseUrl } from "../../utils/const";
const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const regex = /^[A-Za-z]+$/;
const registerSchema = yup.object({
	email: yup
		.string()
		.required("Email is required")
		.email("Email must have proper format"),
	firstName: yup.string().required("First name is required"),
	lastName: yup.string().required("Last name is required"),
	phone: yup
		.string()
		.matches(phoneRegExp, "Phone number is not valid")
		.required("Phone number is required")
		.typeError("Phone number is not valid"),
	city: yup
		.string()
		.matches(regex, "Enter valid city name")
		.required("City name is required"),
});

export default function SignUp() {
	const classes = useStyles();

	return (
		<div>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Register
					</Typography>

					<Formik
						initialValues={{
							email: "",
							firstName: "",
							lastName: "",
							phone: "",
							city: "",
						}}
						validationSchema={registerSchema}
						onSubmit={(values) => {
							axios
								.post(`${baseUrl}/register`, {
									Email: values.email,
									FirstName: values.firstName,
									LastName: values.lastName,
									Phone: values.phone,
									City: values.city,
								})
								.then((res) => {
									if (res.status === 200) {
										alert("User Registered Successfully");
									} else {
										alert("Error in creating user");
									}
								})
								.catch((err) => {
									alert("Email alreay Registered");

									console.log(err);
								});
						}}
					>
						{(props) => {
							const {
								values,
								errors,
								touched,
								handleSubmit,
								handleChange,
								handleBlur,
							} = props;
							return (
								<div>
									<Grid container spacing={2}>
										<Grid item xs={12} sm={6}>
											<TextField
												autoComplete="fname"
												name="firstName"
												variant="outlined"
												required
												fullWidth
												value={values.firstName}
												id="firstNamee"
												label="First Name"
												autoFocus
												onChange={handleChange("firstName")}
												onBlur={handleBlur("firstName")}
												error={
													errors.firstName && touched.firstName ? true : false
												}
												helperText={
													errors.firstName && touched.firstName
														? errors.firstName
														: null
												}
											/>
										</Grid>
										<Grid item xs={12} sm={6}>
											<TextField
												variant="outlined"
												required
												fullWidth
												id="lastName"
												label="Last Name"
												name="lastName"
												autoComplete="lname"
												value={values.lastName}
												error={
													errors.lastName && touched.lastName ? true : false
												}
												helperText={
													errors.lastName && touched.lastName
														? errors.lastName
														: null
												}
												onBlur={handleBlur("lastName")}
												onChange={handleChange("lastName")}
											/>
										</Grid>
										<Grid item xs={12}>
											<TextField
												variant="outlined"
												required
												fullWidth
												id="emaill"
												label="Email Address"
												name="email"
												value={values.email}
												autoComplete="email"
												onChange={handleChange("email")}
												onBlur={handleBlur("email")}
												error={errors.email && touched.email ? true : false}
												helperText={
													errors.email && touched.email ? errors.email : null
												}
											/>
										</Grid>
										<Grid item xs={12}>
											<TextField
												variant="outlined"
												required
												fullWidth
												name="phone"
												label="Phone Number"
												id="phonee"
												value={values.phone}
												autoComplete="phone"
												error={errors.phone && touched.phone ? true : false}
												helperText={
													errors.phone && touched.phone ? errors.phone : null
												}
												onBlur={handleBlur("phone")}
												onChange={handleChange("phone")}
												value={values.phone}
											/>
										</Grid>
										<Grid item xs={12}>
											<TextField
												variant="outlined"
												required
												fullWidth
												name="city"
												label="City"
												id="cityy"
												value={values.city}
												autoComplete="City"
												error={errors.city && touched.city ? true : false}
												helperText={
													errors.city && touched.city ? errors.city : null
												}
												onChange={handleChange("city")}
												onBlur={handleBlur("city")}
											/>
										</Grid>
									</Grid>
									<Button
										type="submit"
										fullWidth
										variant="contained"
										color="primary"
										className={classes.submit}
										onClick={handleSubmit}
									>
										Register
									</Button>
								</div>
							);
						}}
					</Formik>
				</div>
			</Container>
		</div>
	);
}
