import React from "react";
import ReactDOM from "react-dom";
import TheTitle from "./TheTitle";
import Calculator from "./Calculator";

ReactDOM.render(
	<React.StrictMode>
		<div className="hero has-background-primary-dark">
			<div className="hero-body">
				<div className="container">
					<TheTitle />
				</div>
			</div>
		</div>
		<main className="section">
			<div className="container">
				<Calculator />
			</div>
		</main>
	</React.StrictMode>,
	document.getElementById("root")
);
