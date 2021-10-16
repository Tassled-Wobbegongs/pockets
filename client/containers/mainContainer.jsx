import React, { Component } from 'react';
import InputsContainer from './inputsContainer.jsx';
import DisplayContainer from './displayContainer.jsx';


class MainContainer extends Component {
    constructor(props){
      super(props);
      this.state = {
        name: '',
        amount: 0,
        category: '',
        total: 0,
        budget: 0
      };
    }

    render(){
      return (
        <div className = 'mainContainer'>
          <h1><center>Budget Shark</center></h1>
          <InputsContainer />
          <DisplayContainer />
        </div>
      )
    }
}

export default MainContainer;