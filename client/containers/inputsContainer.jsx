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

    render(){
      return (
        <div className = 'inputContainer'>
          <h3></h3>
          <input type="text" className='input' id="transactionName" placeholder='Transaction'/>
          <input type="text" className='input' id="transactionAmt" placeholder='Amount'/>
          <select name="Category" className='input' id="category">
            {/* <option value="1">test</option> */}
            <option disabled selected value="1">Choose Category</option>
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
          <button onClick={this.props.submit} id="submitButton">Add Transaction</button>
        </div>
      )
    }
}

export default InputsContainer;