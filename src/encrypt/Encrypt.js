import React, { Component } from 'react';
import { isAllowableChar } from '../helpers'

class Encrypt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plaintext: '',
      secretKey: 1
    };
  }

  mapCharacter = (x) => {
    if (x.charCodeAt(0) === 32) {
      return 32
    }

    if (x.charCodeAt(0) + this.state.secretKey > 122) {
      return (x.charCodeAt(0) + this.state.secretKey) % 122 + 96
    }

    return x.charCodeAt(0) + this.state.secretKey
  }

  getCiphertext = () => {
    var map = Array.prototype.map;
    return map.call(this.state.plaintext, this.mapCharacter)
    .reduce(function(string, x) {
      return string + String.fromCharCode(x)
    }, '')
  }

  plaintextChange = (e) => {
    var text = e.target.value
    if (text && !isAllowableChar(text.charAt(text.length-1))) {
      return
    }
    this.setState({plaintext: text})
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

  render() {
    return (
      <div>
        This is the page to encrypt.<br/>
        <input value={this.state.plaintext} 
               onChange={this.plaintextChange}>
        </input>
        <input type="number" 
               pattern="[0-9]*"
               value={this.state.secretKey}
               onChange={this.secretKeyChange}>
        </input>
        <p>{this.getCiphertext()}</p>
      </div>
    );
  }
}

export default Encrypt;
