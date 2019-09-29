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
      food: ["pasta", "pizza", "potatoes"],
      url: "https://media.giphy.com/media/2WGYAQZ52I6wQecREk/giphy.gif"
    };
  }

callbackFunction = (childData) => {
  console.log(this.state.url);
  this.setState({url: childData})
}

  render() {
    return (
      <div className="App">
        <Background />
        <div className="App-header">
          <h1>Talk to Thanos!</h1>
          <h3>Text  718-400-6004 to speak to Thanos</h3>
          <br/>
          <img src={this.state.url} className="App-logo" alt="logo" />
          <br />
          <Messages parentCallback = {this.callbackFunction}/>
        </div>
      </div>
    );
  }
}
