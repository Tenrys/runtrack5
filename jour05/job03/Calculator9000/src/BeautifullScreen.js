import React, { Component } from "react";

class BeautifullScreen extends Component {
	constructor(props) {
		super(props);

		this.scroll = React.createRef();
	}

	render() {
		return (
			<pre className="screen py-0 px-0">
				<div
					className="py-2 px-0 mx-2"
					style={{ overflow: "auto", display: "flex", flexDirection: "row-reverse" }}
					ref={this.scroll}
				>
					<div className="is-flex" style={{ flexDirection: "column" }}>
						<p className="my-0 has-text-dark">{this.props.operations.join(" ")}</p>
						<h1
							className="title my-0 has-text-right has-text-dark"
							style={{ fontSize: "1.75em" }}
						>
							{this.props.value}
						</h1>
					</div>
				</div>
			</pre>
		);
	}
}

export default BeautifullScreen;
