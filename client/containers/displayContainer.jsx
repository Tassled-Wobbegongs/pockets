import React, { Component } from 'react';
import InputsDisplay from '../components/inputsDisplay.jsx';
import TotalsDisplay from '../components/totalsDisplay.jsx';
import PieChart from '../components/pieChart.jsx';



class DisplayContainer extends Component {
    constructor(props){
      super(props);
      this.state = {
        transactions: this.props.transactions,
        total: this.props.total
      };
    }

    render(){
      return (
        <div className = "displayContainer">
          <h3>October Spending:</h3>
          <InputsDisplay transactions={this.state.transactions} total={this.state.total} />
          <div id="chartContainer">
            <TotalsDisplay />
            <PieChart />
          </div>
        </div>
      )
    }
}

export default DisplayContainer;