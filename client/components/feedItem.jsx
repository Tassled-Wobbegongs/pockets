import React, { Component } from 'react';

class FeedItem extends Component {
    constructor(props){
      super(props);
      this.state = {
        ...props
      };
    }

    componentDidUpdate(prevProps, prevState) {
      // return this.onChange();
      // console.log('prev props', prevProps);
      // console.log('prev state', prevState);
      // console.log('current state', this.state);
      // console.log('current props', this.props);
      if (this.props.transactions !== this.state.transactions) {
        // console.log('new transaction added');
        let newTransactions;
        let newTotal;
        fetch('http://localhost:8080/api/transactions')
          .then( response => response.json())
          .then( data => {
            // console.log('received data', data);
            newTransactions = data.data;
            newTotal = data.total;
            // this.setState({
            //   transactions: newTransactions,
            //   total: newTotal,
            // })
            })
          .catch(err => {
            console.log('error fetching transaction data', err);
          })
      }
    }

    getData() {
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

    delete(identification) {
      return function () {
        fetch('/api/transactions', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: identification.transaction_id,
          })
        })
        .then(data => document.location.reload())
        .catch(err => console.log(err));
      }
    }

    componentDidMount() {
      this.getData();

      // setInterval(this.getData(), 1000);
        // fetch('http://localhost:8080/api/transactions')
        //   .then( response => response.json())
        //   .then( data => {
        //     // console.log('received data', data);
        //     this.setState({
        //       transactions: data.data,
        //       total: data.total
        //     });
        //     // console.log(this.state);
        //   })
        //   .catch(err => {
        //     console.log('error fetching transaction data', err);
        //   });
    }

    //renderRows helper function 
    renderRows() {
      const rows = [];
      const transactions = this.state.transactions
      // console.log(transactions)
      for (let i = 0; i < transactions.length; i++) {
        rows.push(
          <tr className="row" key={i}>
            <td className='item'>{transactions[i].date}</td>
            <td className='item'>{transactions[i].name}</td>
            <td className='item'>{transactions[i].category}</td>
            <td className='item'>${transactions[i].amount}</td>
            <button className='delete' id='submitButton' onClick={this.delete(transactions[i])}>X</button>
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