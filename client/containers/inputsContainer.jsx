import React, { Component } from 'react';

class InputsContainer extends Component {
    constructor(props){
      super(props);
      this.state = {
        name: this.props.name,
        amount: this.props.amount,
        category: this.props.category
      }
    }


    // submit(){
    //   this.setState({name: document.getElementById('transactionName').value});
    //   console.log(this.state.name);
    // }

    render(){
      return (
        <div className = 'inputContainer'>
          <h3>Spendings</h3>
          <input type="text" id="transactionName"/>
          <input type="text" id="transactionAmt"/>
          <select name="Category" id="category">
            <option value="1">test</option>
            <option value="2">Housing/Rent</option>
            <option value="3">Utilities</option>
            <option value="4">Gas</option>
            <option value="5">Groceries</option>
            <option value="6">Dining Out</option>
            <option value="7 ">Drinks</option>
            <option value="8">Entertainment</option>
            <option value="9">Savings</option>
            <option value="10">Other</option>
          </select>
          <button onClick={this.props.submit}>Submit</button>
        </div>
      )
    }
}

export default InputsContainer;