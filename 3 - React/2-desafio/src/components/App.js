import React from "react";
import "../App.css";
import GridContainer from "./GridContainer.js";
import Result from "./Result.js";
import ListInstallments from "../classes/ListInstallments.js";

function App() {
	let installments = new ListInstallments();

	return (
		<>
			<h1>React - Juros Composto</h1>
			<GridContainer installments={installments} />
			<Result listInstallments={installments.getData()} />
		</>
	);
}

export default App;
