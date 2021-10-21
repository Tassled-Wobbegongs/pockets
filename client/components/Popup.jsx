import React, { useState } from 'react';

const Popup = props => {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
      <input type='button' className='close-btn' value='X' onClick={() => props.setTrigger(false)}/> <br/>
      { props.children }
      </div>
    </div>
  ) : '';
};

export default Popup;