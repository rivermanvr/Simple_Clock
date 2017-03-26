import React, { Component } from 'react';
import ReactDOM from 'reactDOM';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div className="container">
        <h3>A simple Clock...</h3>
        <h4>It is {this.state.date.toLocaleTimeString()}.</h4>
      </div>
    );
  }
}

ReactDOM.render(<Clock />,document.getElementById('root'));