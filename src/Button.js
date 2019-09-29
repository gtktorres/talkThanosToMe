import React from 'react';
import './Button.css';

export class Button extends React.Component{
    render(){
        return (
            <div>
                <button type="button" display-type="block">Let's go...</button>
            </div>
        )
    }
}