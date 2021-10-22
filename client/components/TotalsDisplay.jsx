import React, { useState, useRef, useEffect } from 'react';
import Popup from './Popup.jsx';

const TotalsDisplay = props => {

  const [togglePopup, setTogglePop] = useState(false);
  const [budget, setBudget] = useState(0);

  
  const textInput = useRef(null);
  
  const updateInput = e => {
    e.preventDefault();
    setBudget(textInput.current.value)
  }

  useEffect(()=>{
    fetch('/api/users/1')
      .then(res => res.json())
      .then(res => { 
        setBudget(Number(res[0].budget));})
      .catch(err => console.log('ERROR:', err))
  },[]);

  const handleBudget = () => {
    fetch('/api/users/1', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'budget': textInput.current.value})
    })
      .then(res => res.json())
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
      <input type='number' className='bgt-val' ref={textInput} placeholder='Set Budget Here' onChange={updateInput}/> <br/>
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