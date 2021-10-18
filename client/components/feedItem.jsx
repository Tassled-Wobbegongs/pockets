import React, { Component } from 'react';

class FeedItem extends Component {
    constructor(props){
      super(props);
      this.state = {
        transactions: this.props.transactions,
        total: this.props.total
      };
    }

    
    componentDidUpdate(prevProps, prevState) {
      // return this.onChange();
      if (prevState.transactions !== this.state.transasctions) {
        console.log('new transaction added');
        // return this.onChange();
      }
    //     fetch('http://localhost:8080/api/transactions')
    //       .then( response => response.json())
    //       .then( data => {
    //         // console.log('received data', data);
    //         this.setState({
    //           transactions: data.data,
    //           total: data.total
    //         });
    //         // console.log(this.state);
    //       })
    //       .catch(err => {
    //         console.log('error fetching transaction data', err);
    //       })
    //   
    }

    onChange() {
      fetch('http://localhost:8080/api/transactions')
        .then( response => response.json())
        .then( data => {
          // console.log('received data', data);
          this.setState({
            transactions: data.data,
            total: data.total
          });
          // console.log(this.state);
        })
        .catch(err => {
          console.log('error fetching transaction data', err);
        });
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
            // console.log(this.state);
          })
          .catch(err => {
            console.log('error fetching transaction data', err);
          });
      
    }
    //renderRows helper function 
    renderRows() {
      const rows = [];
      const transactions = this.state.transactions
      console.log(transactions)
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
        <>
        <div className="headerRow">
            <span className='header'>Date</span>
            <span className='header'>Transaction</span>
            <span className='header' >Category</span>
            <span className='header'>Amount</span>
        </div>
        <div className="feedItem">
          
          <div className="transactionTable">
            <table className="transactions">
              {/* <tr className="row">
                <th className='item' id="itemHeader">Date</th>
                <th className='item' id="itemHeader">Transaction</th>
                <th className='item' id="itemHeader">Category</th>
                <th className='item' id="itemHeader">Amount</th>
              </tr> */}
              {this.renderRows()}
            </table> 
          </div>
        </div>
        </>
      )
    }
}

export default FeedItem;