import React from "react";

function GreatOperationButton(props) {
	return (
		<div
			className="button is-fullwidth is-primary mx-1 is-family-monospace"
			onClick={() => props.onClick(props.operation)}
		>
			{props.operation}
		</div>
	);
}

export default GreatOperationButton;
