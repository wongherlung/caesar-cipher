import React, { Component } from 'react';

class Encrypt extends Component {
  render() {
    return (
      <div>
        This is the page to encrypt.<br/>
        <input value={this.props.plaintext} 
               onChange={this.props.plaintextChange}>
        </input>
        <input type="number" 
               pattern="[0-9]*"
               value={this.props.secretKey}
               onChange={this.props.secretKeyChange}>
        </input>
        <button onClick={this.props.changeView}>Encrypt!</button>
      </div>
    );
  }
}

export default Encrypt;
