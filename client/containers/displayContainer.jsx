import React, { useState } from 'react';
import InputsDisplay from '../components/inputsDisplay.jsx';
import TotalsDisplay from '../components/totalsDisplay.jsx';
import PieChart from '../components/pieChart.jsx';
import Total from '../components/total.jsx';



function DisplayContainer(props){
    // constructor(props){
    //   super(props);
    //   this.state = {
    //     transactions: this.props.transactions,
    //     total: this.props.total
    //   };
  const [transactions, setTransactions] = useState(props.transactions);
  const [total, setTotal] = useState(props.total);
    
  return (
    <div className = "displayContainer">
      <h3>October Spending:</h3>
      <InputsDisplay transactions={transactions} total={total} />
      <Total />
      <div id="chartContainer">
        <TotalsDisplay total={total}/>
        <PieChart />
      </div>
    </div>
  );
}

export default DisplayContainer;


//I think we should hoist the state at the upper most parent component and pass it down so it doesnt keep getting fetched and rerendered in every single component