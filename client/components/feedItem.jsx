import React, { Component } from 'react';

class FeedItem extends Component {
    constructor(props){
      super(props);
      this.state = {

      };
    }

    render(){
      return (
        <div className="feedItem">
          <p>Jack in the Box $20 Food</p>
        </div>
      )
    }
}

export default FeedItem;