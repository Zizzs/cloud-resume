import React, { Component } from "react";
import ReactDom from "react-dom";

class Counter extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  componentDidMount() {
    fetch(
      `https://dw13pomybh.execute-api.us-east-1.amazonaws.com/Prod/handler_get`
    )
      .then((res) => res.json())
      .then((json) => this.setState({ counter: json }));

    fetch(
      `https://dw13pomybh.execute-api.us-east-1.amazonaws.com/Prod/handler_update`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    ).then(console.log("Updated API +1."));
  }
  render() {
    return (
      <div>
        <p>Visitors: {this.state.counter}</p>
      </div>
    );
  }
}

export default Counter;
