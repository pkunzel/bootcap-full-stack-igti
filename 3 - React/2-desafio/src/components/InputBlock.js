import React from "react";

function InputBlock(props) {
	const [value, setValue] = React.useState(0);

	React.useEffect(() => {
		props.updateData(value);
	});

	return (
		<div className="divInputBlock">
			<label>{props.label}</label>
			<input type="number" onChange={(event) => setValue(event.target.value)} />
		</div>
	);
}

export default InputBlock;
