import React, { Component } from 'react';

class TotalsDisplay extends Component {
    constructor(props){
      super(props);
      this.state = {

      };
    }

    render(){
      return (
        <div className = "totalsDisplay">
          <center>
          <p>
              Budget
              <br></br>
              $20,000
              <br></br>
              Total Spent
              <br></br>
              $10,000
              <br></br>
              Remaining
              <br></br>
              $10,000
              <br></br>
              <button>Edit Budget</button>
          </p>
          </center>
        </div>
      )
    }
}

export default TotalsDisplay;