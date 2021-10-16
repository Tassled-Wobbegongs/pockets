import React, { Component } from 'react';
import InputsContainer from './inputsContainer.jsx';
import DisplayContainer from './displayContainer.jsx';

class MainContainer extends Component {
    constructor(props){
      super(props);
      this.state = {

      };
    }

    render(){
      return (
        <div>
          <h1>MAIN CONTAINER TEXT</h1>
          <InputsContainer />
          <DisplayContainer />
        </div>
      )
    }
}

export default MainContainer;