import React from "react";

function AmazingNumberButton(props) {
	return (
		<div
			className={"button is-fullwidth is-info mx-1 is-family-monospace " + props.className}
			onClick={() => props.onClick(props.number)}
		>
			{props.number}
		</div>
	);
}

export default AmazingNumberButton;
