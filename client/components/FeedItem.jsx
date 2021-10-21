import React, { Component } from 'react';

// class FeedItem extends Component {
//     constructor(props){
//       super(props);
//       this.state = {
//         ...props
//       };
//     }

const FeedItem = props => {

  // useEffect(() => {
  //   if (props.transactions !== props.state.transactions) {
  //     let newTransactions;
  //     let newTotal;
  //     fetch('api/transactions')
  //   }

  // });
    // // calling a fetch request, then updating the state if there is a new transaction
    // componentDidUpdate(prevProps, prevState) {
    //   // conditional to check if the state has changed
    //   if (this.props.transactions !== this.state.transactions) {
    //     // console.log('new transaction added');
    //     let newTransactions;
    //     let newTotal;
    //     fetch('http://localhost:8080/api/transactions')
    //       .then( response => response.json())
    //       .then( data => {
    //         // console.log('received data', data);
    //         newTransactions = data.data;
    //         newTotal = data.total;
    //         // this.setState({
    //         //   transactions: newTransactions,
    //         //   total: newTotal,
    //         // })
    //         })
    //       .catch(err => {
    //         console.log('error fetching transaction data', err);
    //       })
    //   }
    // }

    // // GET request to the API to grab the newest transactions? Isn't this the same as componentDidUpdate?
    // getData() {
    //   fetch('http://localhost:8080/api/transactions')
    //     .then( response => response.json())
    //     .then( data => {
    //       // console.log('received data', data);
    //       this.setState({
    //         transactions: data.data,
    //         total: data.total
    //       });
    //       // console.log(this.state);
    //     })
    //     .catch(err => {
    //       console.log('error fetching transaction data', err);
    //     });
    // }

    function deleteItem(identification) {
        fetch('/api/transactions', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: identification._id,
          })
        })
        .then(data => document.location.reload())
        .catch(err => console.log(err));
    }

    // As soon as the page loads, invoke the GET request for transcations in the DB.
    // componentDidMount() {
    //   this.getData();

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
    

    //renderRows helper function 
    function renderRows() {
      const rows = [];
      /*
      *************** ITERATION **************
      changed this.state.transactions to transactions
      */
      const transactions = props.transactions;
      // console.log(transactions)
      for (let i = 0; i < props.transactions.length; i++) {
        rows.push(
          <tr className="row" key={i}>
            <td className='item'>{props.transactions[i].date}</td>
            <td className='item'>{props.transactions[i].name}</td>
            <td className='item'>{props.transactions[i].category}</td>
            <td className='item'>${props.transactions[i].amount}</td>
            {/* cat-snake todo: all delete buttons should have unique ids */}
            <button className='delete' id='editButton' onClick={() => deleteItem(props.transactions[i])}>X</button>
          </tr>
        )
      }
      return rows;
    }
      
    return (
      <>
      <div className="headerRow">
          <span className='header'>Date</span>
          <span className='header'>Transaction</span>
          <span className='header'>Category</span>
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
            {renderRows()}
          </table> 
        </div>
      </div>
      </>
    )
}

export default FeedItem;