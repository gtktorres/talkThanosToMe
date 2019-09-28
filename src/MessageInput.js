import React from "react"
import thanos from './thanos.gif'

export default class MessageInput extends React.Component{
    render(){
        return (
            <div>
                <img src={thanos} className="App-logo" alt="logo" />
                <h5>Enter your message here</h5> 
            </div>
        )
    }
}