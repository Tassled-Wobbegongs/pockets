import React, { useState } from 'react';
import InputsDisplay from '../components/inputsDisplay.jsx';
import TotalsDisplay from '../components/totalsDisplay.jsx';
import PieChart from '../components/pieChart.jsx';
import Total from '../components/total.jsx';



const DisplayContainer = props => {
    // constructor(props){
    //   super(props);
    //   this.state = {
    //     transactions: this.props.transactions,
    //     total: this.props.total
    //   };
  const [transactions, setTransactions] = useState(props.transactions);
  const [total, setTotal] = useState(props.total);
  
  // automatically render the month using the Date function
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' })
    
  return (
    <div className = "displayContainer">
      <h3>{month}'s Spending:</h3>
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