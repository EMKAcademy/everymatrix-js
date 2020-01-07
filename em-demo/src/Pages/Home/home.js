import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div>Hello World! {this.props.name}</div>
    );
  }
}