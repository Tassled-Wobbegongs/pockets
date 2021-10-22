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

      return (
        <div className = 'mainContainer'>
          <img src={logo} id="logo"/> 
          {/* For react hooks, we can pass state around the same as react, but without the "this" keyword */}
          <InputsContainer setState={setState} /> {/*Dont know if this is correct*/}
          {/* since "this" keyword is no longer needed, we can pass state and total without it(per below, we're passing it by only referencing state. transaction) */}
          <DisplayContainer transactions={state.transactions} total={state.total} />
        </div>
  )
};


export default MainContainer;