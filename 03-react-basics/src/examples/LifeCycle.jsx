import React, { Component } from "react";

/* 
  Class-Based Component Lifecycle:

  * Mounting:
  1. constructor(): Called when an instance of the component is being created.
  2. static getDerivedStateFromProps(props, state): Invoked right before rendering when new props or state are being received.
  3. render(): Responsible for rendering the component.
  4. componentDidMount(): Invoked immediately after a component is inserted into the DOM.

  * Updating:
  1. static getDerivedStateFromProps(props, state): Similar to the mounting phase, but it is also called on updates.
  2. shouldComponentUpdate(nextProps, nextState): Used to control if the component should re-render after receiving new props or state.
  3. render(): Re-renders the component.
  4. getSnapshotBeforeUpdate(prevProps, prevState): Gets called right before changes from the virtual DOM are to be reflected in the actual DOM.
  5. componentDidUpdate(prevProps, prevState, snapshot): Invoked immediately after a component has been updated.

  * Un-Mounting:
  1. componentWillUnmount(): Called just before a component is unmounted and destroyed.
  
  * Error Handling:
  1. componentDidCatch(error, info): Catches errors in child components.
*/

export class MountingLifeCycle extends Component {
  constructor(params) {
    super(params);
    console.log("1. Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps");
  }

  render() {
    console.log("3. render");
    return <div>LifeCycle</div>;
  }

  componentDidMount() {
    console.log("4. componentDidMount");
  }

  // un-mounting
  componentWillUnmount() {
    console.log("5. componentWillUnmount");
  }

  componentDidCatch(error, info) {
    console.log("x. componentDidCatch");
  }
}

export class UpdatingLifeCycle extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("1. getDerivedStateFromProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("2. shouldComponentUpdate(nextProps, nextState)");
  }

  render() {
    console.log("3. render");
    return <div>LifeCycle</div>;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("4. getSnapshotBeforeUpdate");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("5. componentDidUpdate");
  }

  // un-mounting
  componentWillUnmount() {
    console.log("5. componentWillUnmount");
  }

  componentDidCatch(error, info) {
    console.log("x. componentDidCatch");
  }
}
