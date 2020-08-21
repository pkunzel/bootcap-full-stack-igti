import React from 'react';
import InputBlock from './InputBlock.js'
import '../App.css';

function GridContainer() {
    return (
      <div className="gridContainer"> 
        <InputBlock label="Montante Inicial"/>
        <InputBlock label="Taxa de Juros Mensal"/>
        <InputBlock label="Período (Meses)"/>
      </div>
    )
  }

export default GridContainer;