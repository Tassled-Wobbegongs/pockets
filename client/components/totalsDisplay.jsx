import React, { Component } from 'react';

class TotalsDisplay extends Component {
    constructor(props){
      super(props);
      this.state = {
        total: this.props.total,
        budget: 5000
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

    render(){
      return (
        <div className = "totalsDisplay">
          {/* <center> */}
            <div>
              Budget:
              <br></br>
              ${Number(this.state.budget).toFixed(2)}
            </div>
            <div>
              Total Spent:
              <br></br>
              <center>${Number(this.state.total).toFixed(2)}</center>
            </div>
            <div>
              Remaining:
              <br></br>
              <center>${Number(this.state.budget - this.state.total).toFixed(2)}</center>
            </div>
            <button id="editButton">Edit Budget</button>
          {/* </center> */}
        </div>
      )
    }
}

export default TotalsDisplay;