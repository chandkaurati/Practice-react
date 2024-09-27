import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Chandkaurati",
      count: 0,
      users: [],
    };


    this.increment = this.increment.bind(this)
  }

  increment() {
    this.setState((prevstate) => ({
      count: prevstate.count + 1,
    }));
  }

  getData = () => {
    console.log(this.state.name);
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    console.log("componnant updaated");
  }

  componentWillUnmount(){
    console.log("componant has been unmounted")
  }

  render() {
    return (
      <div>
        <p>hi {this.state.name}</p>
        <p>count : {this.state.count}</p>
        <button onClick={this.increment}>incremnt</button>
      </div>
    );
  }
}
