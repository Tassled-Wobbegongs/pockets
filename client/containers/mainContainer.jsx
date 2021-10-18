import React, { Component } from 'react';
import InputsContainer from './inputsContainer.jsx';
import DisplayContainer from './displayContainer.jsx';


class MainContainer extends Component {
    constructor(props) {
      super(props);

      this.state = {
        transactions: [],
        total: 0,
      };

      this.submit = this.submit.bind(this);
    }
  

  //change this to componentDidUpdate
  // componentDidUpdate() {
  //   fetch('http://localhost:8080/api/transactions')
  //     .then( response => response.json())
  //     .then( data => {
  //       // console.log('received data', data);
  //       this.setState({
  //         transactions: data.data,
  //         total: data.total
  //       });
  //       console.log(this.state);
  //     })
  //     .catch(err => {
  //       console.log('error fetching transaction data', err);
  //     })
  // };

    submit(){
      console.log('submit activated')
      if(document.getElementById('category').value !== "1"){
        fetch('/api/transactions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: document.getElementById('transactionName').value,
            amount: document.getElementById('transactionAmt').value,
            date: new Date().toLocaleDateString(),
            category_id: document.getElementById('category').value
          })
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          // console.log(this.state);
          const transactions = data.data;
          // // transactions.push(data);
          this.setState({
            transactions: transactions,
            total: data.total
          });
          document.location.reload();
        })
        .catch(err => console.log(err));
      }
      else{
        console.log('submit was clicked while category was still "choose category"');
      }
    };

    render(){
      return (
        <div className = 'mainContainer'>
          <h1><center>Pockets</center></h1>
          <InputsContainer state={this.state} submit={this.submit}/>
          <DisplayContainer transactions={this.state.transactions} total={this.state.total} />
        </div>
      )
    };
}

export default MainContainer;