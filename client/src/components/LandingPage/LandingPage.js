import React from "react";
import Slider from "./Slider/Slider";
import Welcome from "./Welcome/Welcome";
import Button from "@material-ui/core/Button";

import { useHistory } from "react-router-dom";
export default function LandingPage() {
	const history = useHistory();
	return (
		<div>
			<Slider />
			<Welcome />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					marginTop: "50px",
					color: "#003300",
					marginBottom: 100,
				}}
			>
				<h1>Exploriana Tour Pakistan</h1>
				<h1>Cooming Soon</h1>
				<h2>
					Register Yourself for release Notification and enjoy Special benefits
				</h2>
				<Button
					type="submit"
					variant="contained"
					style={{ backgroundColor: "green", color: "white" }}
					onClick={() => history.push("./register")}
				>
					Register Now
				</Button>
			</div>
		</div>
	);
}
