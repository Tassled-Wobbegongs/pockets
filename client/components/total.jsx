import React, { Component } from 'react';

class total extends Component {
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
      renderTotal() {
        const rows = [];
        const total = this.state.total;
        return 'Total: $' + total;
      }

    render(){
      return (
        <div className = "total">
            {this.renderTotal()}
        </div>
      )
    }
}

export default total;