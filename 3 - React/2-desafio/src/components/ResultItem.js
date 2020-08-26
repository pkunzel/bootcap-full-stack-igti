import React from "react";
import "../App.css";

function ResultItem(props) {
	return (
		<div className="resultItem">
			<span>{props.number}</span>
			<div>
				<p>{props.total}</p>
				<p>{props.interest}</p>
				<p>{props.percentage}</p>
			</div>
		</div>
	);
}

export default ResultItem;
