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
          <p>
              Budget:
              <br></br>
              Total Spent:
              <br></br>
              Remaining:
              <br></br>
              <input type="text" value="$$$"></input>
              <button>Edit Budget</button>
          </p>
        </div>
      )
    }
}

export default TotalsDisplay;