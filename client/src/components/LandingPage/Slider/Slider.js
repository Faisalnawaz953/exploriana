import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);
export default function Slider() {
	return (
		<AutoplaySlider
			play={true}
			cancelOnInteraction={false} // should stop playing on user interaction
			interval={3000}
			style={{ height: 700 }}
		>
			<div data-src={require("../../../assets/ab.jpg")} />
			<div data-src={require("../../../assets/pk.jpg")} />
			<div data-src={require("../../../assets/mg.jpg")} />
		</AutoplaySlider>
	);
}
