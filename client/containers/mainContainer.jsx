import React, { useState, useEffect } from 'react';
import InputsContainer from './inputsContainer.jsx';
import DisplayContainer from './displayContainer.jsx';

import logo from '../../Pockets-logo.png';

//Main component
const MainContainer = props => {
    // declaring the state function here, and the setState function
    const [state, setState] = useState({
      transactions: [], 
      total: 0
    });
  

    // on page load, send a query to the database and only re-render components when the state changes
    useEffect(() => {
      fetchData()
    },[]) 
    
    // GET request to the backend for DB entries to populate our DisplayContainer
    const fetchData = () => {
      fetch('http://localhost:8080/api/transactions', {
        method: 'GET',
      })
      .then(res => res.json())
      .then(res => setState({transactions: res.data, total: res.total}))
      .catch(err => console.log('Error fetching transaction data', err))
    }

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
        .then((result) => setState({
          transactions: result.transactions, 
          total: result.total
        }))
        .catch(err => console.log(err));
      }
    };

    //handler for submit
    const handleSubmit = event => {
      event.preventDefault()
      submitData() //Saves data when inputs are submitted
    }


      return (
        <div className = 'mainContainer'>
          <img src={logo} id="logo"/> 
          {/* For react hooks, we can pass state around the same as react, but without the "this" keyword */}
          {/* handleSubmit has to be passed as an anon function... Adrian explained, I don't understand. Basically magic*/}
          <InputsContainer state={state} submit={() => handleSubmit}/> {/*Dont know if this is correct*/}
          {/* since "this" keyword is no longer needed, we can pass state and total without it(per below, we're passing it by only referencing state. transaction) */}
          <DisplayContainer transactions={state.transactions} total={state.total} />
        </div>
  )
};


export default MainContainer;