import React, { Component } from "react";
import AmazingNumberButton from "./AmazingNumberButton";
import BeautifullScreen from "./BeautifullScreen";
import GreatOperationButton from "./GreatOperationButton";
import MagnificentEqualButton from "./MagnificentEqualButton";

import "./Calculator.css";

class Calculator extends Component {
	constructor(props) {
		super(props);

		this.screen = React.createRef();

		this.state = {
			operations: [],
			currentNumber: null,
			result: 0,
		};
	}

	scrollScreen() {
		const el = this.screen.current.scroll.current;

		el.scrollLeft = 0;
	}

	componentDidMount() {
		this.scrollScreen();
	}

	handleNumber = number => {
		let { currentNumber, result } = this.state;

		if (result) {
			result = null;
		}

		if (!currentNumber) {
			currentNumber = number;
		} else {
			if (number === "." && currentNumber.toString().includes(".")) return;
			currentNumber = currentNumber.toString() + number;
		}

		this.setState({ currentNumber });

		this.scrollScreen();
	};

	handleOperation = operation => {
		let { currentNumber, result, operations } = this.state;

		operations.push(parseFloat(currentNumber || result), operation);
		console.log(operations);
		result = this.calcOperations();
		currentNumber = null;

		this.setState({ currentNumber, operations, result });
	};

	calcOperations() {
		let { operations } = this.state;

		let accumulated = 0;
		let a = null;
		let operation = null;
		for (let [i, b] of operations.entries()) {
			if (!isNaN(b)) {
				if (!a && i < operations.length - 1) {
					a = b;
				} else if ((a || i === operations.length - 1) && operation) {
					if (!a) {
						a = accumulated;
						accumulated = 0;
					}
					console.log("Running operation: ", a, operation, b);
					// eslint-disable-next-line
					accumulated += eval(`${a} ${operation} ${b}`);
					console.log("Operation ran: ", accumulated);
					a = null;
					operation = null;
				}
			} else {
				operation = b;
			}
		}

		return accumulated;
	}

	handleEqual = () => {
		let { currentNumber, result, operations } = this.state;
		operations.push(parseFloat(currentNumber));
		console.log(operations);
		result = this.calcOperations();
		this.setState({ currentNumber: null, operations: [], result });
	};

	render() {
		return (
			<div className="calculator columns is-centered">
				<div className="column is-narrow is-mobile">
					<div className="tile is-mobile is-ancestor is-vertical box">
						<div className="tile is-parent">
							<BeautifullScreen
								operations={this.state.operations}
								value={
									this.state.currentNumber != null
										? this.state.currentNumber
										: this.state.result
								}
								ref={this.screen}
							/>
						</div>
						<div className="tile is-parent pb-0">
							<div className="tile is-child ">
								<AmazingNumberButton number={7} onClick={this.handleNumber} />
							</div>
							<div className="tile is-child ">
								<AmazingNumberButton number={8} onClick={this.handleNumber} />
							</div>
							<div className="tile is-child ">
								<AmazingNumberButton number={9} onClick={this.handleNumber} />
							</div>
							<div className="tile is-child ">
								<GreatOperationButton
									operation="/"
									onClick={this.handleOperation}
								/>
							</div>
						</div>
						<div className="tile is-parent pb-0">
							<div className="tile is-child ">
								<AmazingNumberButton number={4} onClick={this.handleNumber} />
							</div>
							<div className="tile is-child ">
								<AmazingNumberButton number={5} onClick={this.handleNumber} />
							</div>
							<div className="tile is-child ">
								<AmazingNumberButton number={6} onClick={this.handleNumber} />
							</div>
							<div className="tile is-child ">
								<GreatOperationButton
									operation="*"
									onClick={this.handleOperation}
								/>
							</div>
						</div>
						<div className="tile is-parent pb-0">
							<div className="tile is-child ">
								<AmazingNumberButton number={1} onClick={this.handleNumber} />
							</div>
							<div className="tile is-child ">
								<AmazingNumberButton number={2} onClick={this.handleNumber} />
							</div>
							<div className="tile is-child ">
								<AmazingNumberButton number={3} onClick={this.handleNumber} />
							</div>
							<div className="tile is-child ">
								<GreatOperationButton
									operation="-"
									onClick={this.handleOperation}
								/>
							</div>
						</div>
						<div className="tile is-parent">
							<div className="tile is-child ">
								<AmazingNumberButton number={0} onClick={this.handleNumber} />
							</div>
							<div className="tile is-child ">
								<AmazingNumberButton number="." onClick={this.handleNumber} />
							</div>
							<div className="tile is-child ">
								<MagnificentEqualButton onClick={this.handleEqual} />
							</div>
							<div className="tile is-child ">
								<GreatOperationButton
									operation="+"
									onClick={this.handleOperation}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Calculator;
