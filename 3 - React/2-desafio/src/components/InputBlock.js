import React from 'react';

function InputBlock(props){
    return (
        <div className="divInputBlock">
            <label>{props.label}</label>
            <input />
        </div>
    )
}

export default InputBlock;