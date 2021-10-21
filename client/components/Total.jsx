import React, { Component } from 'react';


const Total = props => {
   
  return (
    <div className = "total">
        Total: ${props.total.toFixed(2)}
    </div>
  )
}

export default Total;