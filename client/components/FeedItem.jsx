import React, { useState, Component, useEffect } from 'react';

// class FeedItem extends Component {
//     constructor(props){
//       super(props);
//       this.state = {
//         ...props
//       };
//     }

const FeedItem = (props) => {
  // const [transactions, setTransactions] = useState(props.transactions);
  // const [total, setTotal] = useState(props.total);

  /*
Using useEffect to replace componentDidUpdate
Performs a GET request to our API, and updates the patch when there is new data, change the state
to include the new data
*/
  // useEffect(() => {
  //   // check if the state has changed
  //   //if (props.transactions !== props.state.transactions) {
  //   fetch('api/transactions')
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setTransactions(res.data);
  //       setTotal(res.total);
  //     })
  //     .catch((err) => {
  //       console.log('error fetching data in FeedItems.jsx: ', err);
  //     });
  // }, []),
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
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: identification._id,
        }),
      })
        .then((data) => document.location.reload())
        .catch((err) => console.log(err));
    };

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
    // console.log(
    //   'transactions.transactions in FeedItems: ',
    //   Object.keys(transactions)
    // );
    console.log('transactions: on line 120 in FeedItems', transactions);
    // let allTransactions = transactions.transactions;
    // console.log('allTransactions in FeedItems.jsx: ', allTransactions);
    for (let i = 0; i < transactions.length; i++) {
      rows.push(
        <tr className="row" key={i}>
          <td className="item">{transactions[i].date}</td>
          <td className="item">{transactions[i].name}</td>
          <td className="item">{transactions[i].category}</td>
          <td className="item">${transactions[i].amount}</td>
          {/* cat-snake todo: all delete buttons should have unique ids */}
          <td className="item"><button
            className="delete"
            id="editButton"
            onClick={() => deleteItem(transactions[i])}
          >
            X
          </button>
          </td>
        </tr>
      );
    }
    // console.log('rows in FeedItems: ', rows);
    return rows;
  }

  return (
    <>
      <div className="headerRow">
        <span className="header">Date</span>
        <span className="header">Transaction</span>
        <span className="header">Category</span>
        <span className="header">Amount</span>
        <span className="header">Actions</span>
      </div>
      <div className="feedItem">
        <div className="transactionTable">
          <table className="transactions">
            <tbody>
            {/* <tr className="row">
              <th className='item' id="itemHeader">Date</th>
              <th className='item' id="itemHeader">Transaction</th>
              <th className='item' id="itemHeader">Category</th>
              <th className='item' id="itemHeader">Amount</th>
            </tr> */}
            {renderRows()}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FeedItem;
