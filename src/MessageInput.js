import React from "react";
import thanos from "./thanos.gif";
import "./MessageInput.css";

export default class MessageInput extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={thanos} className="App-logo" alt="logo" />
        </div>
        <h5>Or enter a message below</h5>
        <form onSubmit={this.handleSubmitMessage}>
          <input type="text" display-type="block" placeholder="Your Message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}
