import React, { Component } from 'react';

class FeedItem extends Component {
    constructor(props){
      super(props);
      this.state = {

      };
    }

    render(){
      return (
        <div className="feedItem">
          <div className="transactionTable">
            <table className="transactions">
              <tr className="row">
                <th>Date</th>
                <th>Transaction</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
              <tr className="row">
                <td>10/16/2021</td>
                <td>Starbucks Coffee</td>
                <td>Drinks</td>
                <td>$5.50</td>
              </tr>
              <tr className="row">
                <td>10/16/2021</td>
                <td>Chipotle</td>
                <td>Dining Out</td>
                <td>$10.50</td>
              </tr>
            </table> 
          </div>
        </div>
        
      )
    }
}

export default FeedItem;