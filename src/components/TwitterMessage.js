import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      color: '#000'
    }
  }

  handleChange = (event, charCount) => {
    this.setState({
      message: event.target.value
    })

    if (charCount < 0) {
    this.changeColor()
    }
    return charCount;
  }

  changeColor() {
    this.setState({
      color: '#ff0000'
    })
  }


  render() {
    let charCount = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
          onChange={(e) => {this.handleChange(e, charCount)}} 
          value ={this.state.message} />
          <p id="charCount" style={{color: this.state.color}}>Characters remaining: {charCount}</p>
      </div>
    )
    }
  }

export default TwitterMessage;