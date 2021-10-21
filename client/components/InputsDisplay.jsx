import React, { useState, Component } from 'react';
import FeedItem from './FeedItem.jsx';

const InputsDisplay = (props) => {
  return (
    <div className="transactionsDisplay">
      <h1></h1>
      <FeedItem transactions={props.transactions} total={props.total} />
    </div>
  );
};

export default InputsDisplay;
