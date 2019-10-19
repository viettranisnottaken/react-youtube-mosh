import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  getBadgeClass() {
    let className = "badge m-2 badge-";
    if (this.props.counter.value === 0) {
      return className + "warning";
    } else {
      return className + "primary";
    }
  }

  getQuantity() {
    const {value} = this.props.counter
    return value === 0 ? "Zero" : value;
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.getQuantity()}</span>
        <button
          className="m-2 btn btn-secondary"
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
        >
          +
        </button>
        <button
          className="m-2 btn btn-secondary"
          onClick={() => {
            this.props.onDecrement(this.props.counter)
          }}
          disabled={this.props.counter.value === 0}
        >
          -
        </button>
        <button className="m-2 btn btn-danger">Delete</button>
      </div>
    );
  }
}

export default Counter;
