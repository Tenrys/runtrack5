import React from "react";

function MagnificentEqualButton(props) {
	return (
		<div
			className="button is-fullwidth is-success mx-1 is-family-monospace"
			onClick={() => props.onClick(props.number)}
		>
			=
		</div>
	);
}

export default MagnificentEqualButton;
