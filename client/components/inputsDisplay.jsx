import React, { Component } from 'react';
import FeedItem from "./feedItem.jsx"

class InputsDisplay extends Component {
    constructor(props){
      super(props);
      this.state = {
        transactions: this.props.transactions,
        total: this.props.total
      };
    }

    render(){
      return (
        <div className='transactionsDisplay'>
          <h1></h1>
          <FeedItem transactions={this.state.transactions} total={this.state.total} />
        </div>
      )
    }
}

export default InputsDisplay;