// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {
    // render a button 
    // add event handlers to button listening for focus and blur events
    // when focus fires, use console.log to print out 'Good!'
    // when blur fires use console.log to print out 'Hey! Eyes on me!'

    focusEvent() {
        console.log('Good!')
    }

    blurEvent() {
        console.log('Hey! Eyes on me!')
    }
    
    render() {
        return (
            <button onFocus={this.focusEvent} onBlur={this.blurEvent}></button>
        )
    }
}