import React, { useState } from "react";

const TwitterMessage = (props) => {
    const [message, setMessage] = useState('')
    const [charRemaining, setCharRemaining] = useState(props.maxChars)

    const handleMessageChange = (event) => {
      setMessage(event.target.value)
      setCharRemaining(charRemaining - 1)
    }

    return (
      <div>
        <strong>Your message:</strong>
        <input 
          onChange={event => handleMessageChange(event)}
          type="text"
          name="message"
          id="message" 
          value={message}
        />
        <p style={{color: 'red'}}>Characters Remaining: 
        <span style={{fontWeight: 900}}> {charRemaining}</span></p>

      </div>
    )
  }

export default TwitterMessage;