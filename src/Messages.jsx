import React, { Component } from "react";
import "./MessageInput.css";
import axios from "axios";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      userMessage: "",
      thanosMessage: ""
    };
  }
  //   handleSubmitMessage = e => {
  //     const messages = [...this.state.messages];
  //     messages.push(e.target.value);
  //     this.setState({ messages });
  //   };

  handleUserMessage = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    this.scrollToBottom();
  };

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  updateMessages = e => {
    axios.post("http://localhost:4000/api/message", {
      message: this.state.userMessage
    }).then(res => {
      const thanosMessage = res.data.line;
      this.setState({ thanosMessage });
    });
    const messages = [...this.state.messages];
    const userLine = {
      sender: "user",
      text: this.state.userMessage
    };
    const thanosLine = {
      sender: "thanos",
      text: this.state.thanosMessage
    };
    messages.push(userLine);
    messages.push(thanosLine);
    const userMessage = "";
    const thanosMessage = "";
    this.setState({ messages, userMessage, thanosMessage });
    this.scrollToBottom();
  };

  render() {
    return (
      <div>
        <div className="messagesContainer">
          {this.state.messages.map(message => (
            <div className={message.sender}>{message.text}</div>
          ))}
          <div
            style={{ float: "left", clear: "both" }}
            ref={el => {
              this.messagesEnd = el;
            }}
          ></div>
        </div>
        {/* <form onSubmit={this.handleSubmitMessage}> */}
        <input
          type="text"
          display-type="block"
          placeholder="Or enter your message here!"
          onChange={this.handleUserMessage}
          value={this.state.userMessage}
          name="userMessage"
        />
        <button onClick={this.updateMessages}>Send</button>
        {/* </form> */}
      </div>
    );
  }
}

export default Messages;
