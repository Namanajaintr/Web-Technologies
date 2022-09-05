//Error boundary cannot be achieved in FC coz we dont have getDerivedStateFromError and componentDidCatch in FC so use CC
import React, { Component } from "react";
import Fallback from "./Fallback";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError executed");
    console.log(error);
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, info) {
    console.log("componentDidCatch executed");
    console.log(error);
    console.log(info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Error 404</h1>
          <h3>page not found contact adminstrator</h3>
          <Fallback />
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
