import React from "react";
import CalculoSalario from "./calculoSalario.js"
import "./App.css";


function App() {
  return (
    <>
      <MontarCampos />
    </>
  );
}

function MontarCampos() {
  return (
    <>
      <InputBlock
        labelText="Salário Bruto"
        blockColor="blueBlock"
        inputId="inputValBruto"
        inputType="number"
        inputColor="black"
      />
      <div className="gridContainer">
        <InputBlock
          labelText="Base INSS"
          blockColor="grayBlock"
          inputId="inputBaseINSS"
          inputType="text"
        />
        <InputBlock
          labelText="Desconto INSS"
          blockColor="grayBlock"
          inputId="inputDescINSS"
          inputType="text"
          inputColor="orange"
        />
        <InputBlock
          labelText="Base IRPF"
          blockColor="grayBlock"
          inputId="inputBaseIRPF"
          inputType="text"
        />
        <InputBlock
          labelText="Desconto IRPF"
          blockColor="grayBlock"
          inputId="inputDescIRPF"
          inputType="text"
          inputColor="red"
        />
        <InputBlock
          labelText="Salário Líquido"
          blockColor="grayBlock"
          inputId="inputValLiquido"
          inputType="text"
          inputColor="blue"
        />
      </div>
    </>
  );
}

function InputBlock({ labelText, blockColor, inputId, inputType, inputColor }) {
  return (
    <div className={"divBlock " + blockColor}>
      <label htmlFor={inputId}>{labelText}</label>
      <input
        id={inputId}
        type={inputType}
        className={inputColor}
        readOnly={blockColor === "grayBlock"}
        onChange={event => CalculoSalario(event.target.value)}
      />
    </div>
  );
}

export default App;
