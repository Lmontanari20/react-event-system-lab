// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component {
    // render an input with the right type 
    // add an event handler that listens for the keyUp event
    // when that fires, use console.log to print out the text 'Entering password...'

    enterPassword(){
        console.log('Entering password...')
    } 
    
    render() {
        return (
            <input type="password" onKeyUp={this.enterPassword}/>
        )
    }
}