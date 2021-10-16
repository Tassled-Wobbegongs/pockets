import React, { Component } from 'react';
import InputsDisplay from '../components/inputsDisplay.jsx';
import TotalsDisplay from '../components/totalsDisplay.jsx';
import PieChart from '../components/pieChart.jsx';



class DisplayContainer extends Component {
    constructor(props){
      super(props);
      this.state = {

      };
    }

    render(){
      return (
        <div className = "displayContainer">
          <h3>October</h3>
          <InputsDisplay />
          <TotalsDisplay />
          <PieChart />
        </div>
      )
    }
}

export default DisplayContainer;