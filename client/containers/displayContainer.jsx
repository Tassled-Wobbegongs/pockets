import React, { Component } from 'react';
import InputsDisplay from '../components/inputsDisplay.jsx';
import TotalsDisplay from '../components/totalsDisplay.jsx';
import PieChart from '../components/pieChart.jsx';
import Total from '../components/total.jsx';



class DisplayContainer extends Component {
    constructor(props){
      super(props);
      this.state = {
      };
    }

    render(){
      return (
        <div className = "displayContainer">
          <h3>October Spending:</h3>
          <InputsDisplay />
          <Total />
          <div id="chartContainer">
            <TotalsDisplay />
            <PieChart />
          </div>
        </div>
      )
    }
}

export default DisplayContainer;