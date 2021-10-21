import React, { useState } from 'react';
import InputsDisplay from '../components/InputsDisplay.jsx';
import TotalsDisplay from '../components/TotalsDisplay.jsx';
import PieChart from '../components/pieChart.jsx';
import Total from '../components/Total.jsx';



const DisplayContainer = props => {

  // automatically render the month using the Date function
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' })
    
  return (
    <div className = "displayContainer">
      <h3>{month}'s Spending:</h3>
      <InputsDisplay transactions={props.transactions} total={props.total} />
      <Total total={props.total} />
      <div id="chartContainer">
        <TotalsDisplay total={props.total}/>
        <PieChart total={props.total} transactions={props.transactions} />
      </div>
    </div>
  );
}

export default DisplayContainer;


//I think we should hoist the state at the upper most parent component and pass it down so it doesnt keep getting fetched and rerendered in every single component