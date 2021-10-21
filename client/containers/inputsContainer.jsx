import React, { useState } from 'react';
// import DisplayContainer from './displayContainer.jsx';


const InputsContainer = props => {
  // whatever we want in the state
  // console.log("logging props property in inputsContainer: ", props.submit)


  //handle change function
  const submitData = () => {
    console.log('submit activated')
    // checks to see if a category has be selected (i.e. not "Choose Category") before submitting the post request
    if (document.getElementById('category').value !== '1') {
      // sends  fetch request to backend API to create a new transaction
      fetch('/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // jsonifies the body of our request so the server can respond
        body: JSON.stringify({
          date: new Date().toLocaleDateString(),
          name: document.getElementById('transactionName').value,
          category_id: document.getElementById('category').value,
          amount: document.getElementById('transactionAmt').value
        })
      })
      // jsonifies the response from the server
      .then(response => response.json())
      // takes the jsonified result and uses it to change the state
      .then((result) => {
          props.setState({
            transactions: result.data, 
            total: result.total
          });
      })
      .catch(err => console.log(err));
    }
  };
  
    //handler for submit
  const handleSubmit = event => {
    // event.preventDefault()
    submitData() //Saves data when inputs are submitted
  }

  return (
    <div className = 'inputContainer'>
      <h3></h3>
      <input type="text" className='input' id="transactionName" placeholder='Transaction'/>
      <input type="text" className='input' id="transactionAmt" placeholder='Amount'/>
      <select name="Category" className='input' defaultValue="1" id="category">
        {/* <option value="1">test</option> */}
        <option disabled value="1">Choose Category</option>
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
      <button onClick={handleSubmit} id="submitButton">Add Transaction</button>
    </div>
  );
}


export default InputsContainer;