import React, { Component } from 'react';

class FeedItem extends Component {
    constructor(props){
      super(props);
      this.state = {
        transactions: [],
        total: 0,
      };
    }

    
    componentDidMount() {
      fetch('http://localhost:8080/api/transactions')
        .then( response => response.json())
        .then( data => {
          // console.log('received data', data);
          this.setState({
            transactions: data.data,
            total: data.total
          });
          console.log(this.state);
        })
        .catch(err => {
          console.log('error fetching transaction data', err);
        })
    }
    //renderRows helper function 
    renderRows() {
      const rows = [];
      const transactions = this.state.transactions
      for (let i = 0; i < transactions.length; i++) {
        rows.push(
          <tr className="row" key={i}>
            <td className='item'>{transactions[i].date}</td>
            <td className='item'>{transactions[i].name}</td>
            <td className='item'>{transactions[i].category}</td>
            <td className='item'>${transactions[i].amount}</td>
          </tr>
        )
      }
      return rows;
    }

    render(){
      return (
        <div className="feedItem">
          <div className="transactionTable">
            <table className="transactions">
              <tr className="row">
                <th className='item'>Date</th>
                <th className='item'>Transaction</th>
                <th className='item'>Category</th>
                <th className='item'>Amount</th>
              </tr>
              {this.renderRows()}
            </table> 
          </div>
        </div>
        
      )
    }
}

export default FeedItem;