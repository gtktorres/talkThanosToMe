import React from 'react';
import MessageInput from './MessageInput';

import './App.css';

export default class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      name: "Alfonso",
      food: ["pasta", "pizza", "potatoes"]
    }
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Talk Thanos To Me</h1>
          <h4>Text 1-718-400-6004 to speak to Thanos</h4>
          <h5>Or enter a message a below</h5>
          <MessageInput />
        </header>
      </div>
    );
  }
}