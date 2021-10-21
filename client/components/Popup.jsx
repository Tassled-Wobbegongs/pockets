import React, { useState } from 'react';

const Popup = props => {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
      <input type='button' className='close-btn' value='X' onClick={() => props.setTrigger(false)}/> <br/>
      <input type='number' className='bgt-val' style={{margin: 10}} placeholder='Set Budget Here'/> <br/>
      <button className='submit-btn' onClick={() => props.setTrigger(false)}>Submit</button>
      { props.children }
      </div>
    </div>
  ) : '';
};

export default Popup;