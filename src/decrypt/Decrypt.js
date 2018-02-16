import React, { Component } from 'react';
import { isAllowableChar } from '../helpers'

class Decrypt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ciphertext: '',
      secretKey: 1
    };
  }

  ciphertextChange = (e) => {
    var text = e.target.value
    if (text && !isAllowableChar(text.charAt(text.length-1))) {
      return
    }
    this.setState({ciphertext: text})
  }

  secretKeyChange = (e) => {
    var key = parseInt(e.target.value, 10)
    if (key && (key > 26 || key <= 0)) {
      return
    }
    if (!key) {
      this.setState({secretKey: 0})
    } else {
      this.setState({secretKey: key})
    }
  }

  mapCharacter = (x) => {
    if (x.charCodeAt(0) === 32) {
      return 32
    }

    if (x.charCodeAt(0) - this.state.secretKey < 97) {
      return 26 + x.charCodeAt(0) - this.state.secretKey
    }

    return x.charCodeAt(0) - this.state.secretKey
  }

  getPlainText = () => {
    var map = Array.prototype.map;
    return map.call(this.state.ciphertext, this.mapCharacter)
    .reduce(function(string, x) {
      return string + String.fromCharCode(x)
    }, '')
  }

  render() {
    return (
      <div>
        <div>
          This is the page to decrypt.<br/>
          <input value={this.state.ciphertext} 
                 onChange={this.ciphertextChange}>
          </input>
          <input type="number" 
                pattern="[0-9]*"
                value={this.state.secretKey}
                onChange={this.secretKeyChange}>
          </input>
          <p>{this.getPlainText()}</p>
        </div>
      </div>
    );
  }
}

export default Decrypt;
