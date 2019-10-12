import React, { Component } from "react";

class Counter extends Component {
  state = {

  }

  constructor(props) {
    super(props);
    // this.handleIncrement = this.handleIncrement.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imgUrl} alt="" /> */}
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn secondary"
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }

  // handleIncrement(e) {
  //   console.log(e);
  //   this.setState({ value: this.props.counter.value + 1 });
  // }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
