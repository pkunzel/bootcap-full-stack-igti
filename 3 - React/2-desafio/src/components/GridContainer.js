import React from "react";
import InputBlock from "./InputBlock.js";
import "../App.css";

function GridContainer(props) {
	return (
		<div className="gridContainer">
			<InputBlock updateData={props.installments.setTotal} label="Montante Inicial" />
			<InputBlock updateData={props.installments.setInterest} label="Taxa de Juros Mensal" />
			<InputBlock updateData={props.installments.setNumberInstallments} label="Período (Meses)" />
		</div>
	);
}

export default GridContainer;
