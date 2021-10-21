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
        <input type='button' className='editBgt' id='editBgt' value='Edit Budget' onClick={setTogglePop}/>
      <Popup trigger={togglePopup} setTrigger={setTogglePop}>

      </Popup>
    </div>
  )
}


export default TotalsDisplay;