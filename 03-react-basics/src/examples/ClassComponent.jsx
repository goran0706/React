import { Component } from "react";

export default class ClassComponent extends Component {
  static defaultProps = {
    propA: "propA default value",
    propB: "propB default value",
  };

  constructor() {
    super();

    // Set the initial state when the component is created
    this.state = {
      propA: "propA is initialized!",
      propB: "",
    };
  }

  // State merging...
  // passing an object to the setState method merges that object to the state, leaving the other properties unchanged.
  setState = () => this.setState({ propB: "propB is initialized!" });

  render() {
    return (
      <div>
        <p>ClassComponent</p>
        <div>
          <p>Property A: {this.state.propA}</p>
          <p>Property B: {this.state.propB}</p>
        </div>
        <button onClick={setState}>Set State</button>
      </div>
    );
  }
}
