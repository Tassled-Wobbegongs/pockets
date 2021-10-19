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
              ${this.state.budget}
            </div>
            <div>
              Total Spent:
              <br></br>
              <center>${this.state.total}</center>
            </div>
            <div>
              Remaining:
              <br></br>
              <center>${this.state.budget - this.state.total}</center>
            </div>
            <button id="editButton">Edit Budget</button>
          {/* </center> */}
        </div>
      )
    }
}

export default TotalsDisplay;