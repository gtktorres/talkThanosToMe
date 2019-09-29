import React from "react";
import "./Background.css";
import Particles from 'react-particles-js' 

const particleOpt = {
    particles: {
        number: {
            value: 150, 
            density: {
               enable: true, 
               value_area: 800
            }
        }
    }
}

export default class Background extends React.Component{
    render(){
        return (
            <div className = "Background">

            {/* <Particles 
              params={particleOpt}
            /> */}

            </div>
        )
    }
}