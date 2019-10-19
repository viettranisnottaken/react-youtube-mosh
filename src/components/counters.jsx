import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = { 
    counters: [
      {id: 1, value: 1},
      {id: 2, value: 0},
      {id: 3, value: 3},
      {id: 4, value: 4},
    ]
   }

   constructor(props) {
    super(props)
  }


  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter}
    counters[index].value++
    this.setState({counters})
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter}
    counters[index].value--
    this.setState({counters})
  };
  
  render() { 
    return ( 
      <React.Fragment>
        <button>Reset</button>
        <button>Add new product</button>
        {this.state.counters.map( counter => (
          <Counter 
            key={counter.id}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            counter={counter}
          />
        ))}
      </React.Fragment>
     );
  }
}
 
export default Counters;