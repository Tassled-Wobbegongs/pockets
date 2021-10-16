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
        <div>
          <h1>DISPLAY CONTAINER TEXT</h1>
          <InputsDisplay />
          <TotalsDisplay />
          <PieChart />
        </div>
      )
    }
}

export default DisplayContainer;