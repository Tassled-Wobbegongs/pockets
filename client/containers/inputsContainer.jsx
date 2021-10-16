import React, { Component } from 'react';

class InputsContainer extends Component {
    constructor(props){
      super(props);
      this.state = {

      };
    }

    render(){
      return (
        <div className = 'inputContainer'>
          <h3>Spendings</h3>
          <input type="text" value="name"/>
          <input type="text" value="$$$"/>
          <input type="text" value="category"/>
          <button>Submit</button>
        </div>
      )
    }
}

export default InputsContainer;