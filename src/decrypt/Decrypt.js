import React, { Component } from 'react';

class Decrypt extends Component {
  mapCharacter = (x) => {
    if (x.charCodeAt(0) === 32) {
      return 32
    }

    if (x.charCodeAt(0) + this.props.secretKey > 122) {
      return (x.charCodeAt(0) + this.props.secretKey) % 122 + 96
    }
    
    return (x.charCodeAt(0) + this.props.secretKey); 
  }

  getCiphertext = () => {
    var map = Array.prototype.map;
    return map.call(this.props.plaintext, this.mapCharacter)
    .reduce(function(string, x) {
      return string + String.fromCharCode(x)
    }, '')
  }

  render() {
    return (
      <div>
        <div onClick={this.props.changeView}>X</div>
        <div>
          This is the page to decrypt.<br/>
          <p>{this.getCiphertext()}</p>
          <input></input>
          <button>Decrypt!</button>
        </div>
      </div>
    );
  }
}

export default Decrypt;
