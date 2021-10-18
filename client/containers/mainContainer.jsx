import React, { Component } from 'react';
import InputsContainer from './inputsContainer.jsx';
import DisplayContainer from './displayContainer.jsx';


class MainContainer extends Component {
    constructor(props){
      super(props);
      this.state = {
        name: '',
        amount: 0,
        category: '',
        total: 0,
        budget: 0
      };
      this.submit = this.submit.bind(this);

    }

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
        .then(data => console.log(data))
        .catch(err => console.log(err));
      }
      else{
        console.log('submit was clicked while category was still "choose category"');
      }
    }



    render(){
      return (
        <div className = 'mainContainer'>
          <h1><center>Pockets</center></h1>
          <InputsContainer state={this.state} submit={this.submit}/>
          <DisplayContainer />
        </div>
      )
    }
}

export default MainContainer;