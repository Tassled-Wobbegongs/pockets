import React, { Component } from 'react';
import FeedItem from "./feedItem.jsx"

class InputsDisplay extends Component {
    constructor(props){
      super(props);
      this.state = {

      };
    }

    render(){
      return (
        <div>
          <h1>INPUTS DISPLAY</h1>
          <FeedItem />
        </div>
      )
    }
}

export default InputsDisplay;