import React from "react";
import thanos from "./thanos.gif";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Background from "./Background";
import Messages from "./Messages";

import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Alfonso",
      food: ["pasta", "pizza", "potatoes"]
    };
  }

  render() {
    return (
      <div className="App">
        <Background />
        <div className="App-header">
          <h1>Talk to Thanos!</h1>
          <h4>Text 1-718-400-6004 to speak to Thanos</h4>
          <br />
          <img src={thanos} className="App-logo" alt="logo" />
          <Messages />
        </div>
      </div>
    );
  }
}
