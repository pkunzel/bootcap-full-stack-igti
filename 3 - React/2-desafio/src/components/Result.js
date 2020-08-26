import React from "react";
import ResultItem from "./ResultItem.js";
import "../App.css";

function Result(props) {
	return (
		<div className="resultContainer">
			{props.listInstallments.map((item) => (
				<ResultItem
					key={item.number}
					number={item.number}
					total={item.total}
					interest={item.interest}
					percentage={item.percentage}
				/>
			))}
		</div>
	);
}

export default Result;
