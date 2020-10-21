import React from "react";
import Register from "./components/register/register";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";

//import img from './assets/img.jpg'
function App() {
	return (
		<div>
			<Switch>
				<Route path="/" exact component={LandingPage} />
				<Route path="/register" component={Register} />
			</Switch>
		</div>
	);
}

export default App;
