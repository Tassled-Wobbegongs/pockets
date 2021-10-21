import React, { useState } from 'react';
import Popup from './Popup.jsx';

const TotalsDisplay = props => {

  const [budget, setBudget] = useState(0);
  const [togglePopup, setTogglePop] = useState(false);

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
      <Popup trigger={togglePopup} budget={budget} setTrigger={setTogglePop}/>
    </div>
  )
}

const style = {
  marginTop: 10,
  display: 'flex',
  justifyContent: 'center'
}


export default TotalsDisplay;