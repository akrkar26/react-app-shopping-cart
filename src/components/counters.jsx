import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  
  render() {
    
    return (
      <div>
        Item(s):
        {
        this.props.counters.map(counter => 
            <Counter key={counter.id} counter={counter}
             onAdd={this.props.onAdd}
             onRemove = {this.props.onRemove}
             >

            </Counter>
        )
        }
      </div>
    );
  }
}

export default Counters;
