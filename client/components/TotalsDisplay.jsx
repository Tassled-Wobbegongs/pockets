import React, { useState, useEffect } from 'react';
import Popup from './Popup.jsx';

const TotalsDisplay = props => {

  const [togglePopup, setTogglePop] = useState(false);
  const [budget, setBudget] = useState(0);

  const updateInput = e => {
    e.preventDefault();
    setBudget(state => {
      console.log('hi')
      return {
        state, [e.target.id]: e.target.value
      };
    })
  }

  const handleBudget = () => {
    fetch(`/api/users/${props.state._id}`, {
      method: 'PUT'
    }, setBudget)
      .then(res => {
        console.log('PUT user response: ', res);
      })
      .then(res => res.json())
      .then(res.setBudget({budget: res.budget}))
      .catch(err => console.log('ERROR:', err))
  }


  return (
    <div className = "totalsDisplay">
      {/* <center> */}
        <div>
          Budget:
          <br></br>
          ${Number(budget).toFixed(2)}
        </div>
        <div>
          Total Spent:
          <br></br>
          <center>${Number(props.total).toFixed(2)}</center>
        </div>
        <div>
          Remaining:
          <br></br>
          <center>${Number(budget - props.total).toFixed(2)}</center>
        </div>
        <button className='editBgt' onClick={setTogglePop}>Edit Button</button>
      <Popup trigger={togglePopup} budget={budget} setTrigger={setTogglePop}>
      <div style={{marginTop: 10}}>
      <input type='number' className='bgt-val' placeholder='Set Budget Here' value={budget} onChange={updateInput}/> <br/>
      <button className='submit-btn' onClick={() => {setTogglePop(false); handleBudget()}}>Submit</button> <br/>
      </div>
      </Popup>
    </div>
  )
}

const style = {
  marginTop: 10,
  display: 'flex',
  justifyContent: 'center'
}


export default TotalsDisplay;