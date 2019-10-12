import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {onReset, counters, onDelete, onIncrement} = this.props
    // equals to: {onReset, counters, onDelete, onIncrement} = 
    //            {this.props.onReset, this.props.counters, etc etc}

    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" 
        onClick={onReset}>Reset</button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
