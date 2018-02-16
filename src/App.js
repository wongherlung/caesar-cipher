import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Encrypt from './encrypt/Encrypt'
import Decrypt from './decrypt/Decrypt';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plaintext: '',
      key: 1,
      encrypt: true
    };
  }

  isAllowableChar = (c) => {
    var asciiCode = c.charCodeAt(0)
    return (asciiCode >= 97 && asciiCode <= 122) || asciiCode === 32
  }

  changeView = () => {
    this.setState({encrypt: !this.state.encrypt})
  }

  plaintextChange = (e) => {
    var text = e.target.value
    if (text && !this.isAllowableChar(text.charAt(text.length-1))) {
      return
    }
    this.setState({plaintext: text})
  }

  keyChange = (e) => {
    var key = parseInt(e.target.value, 10)
    if (key && (key > 26 || key <= 0)) {
      return
    }
    if (!key) {
      this.setState({key: 0})
    } else {
      this.setState({key: key})
    }
  }

  getView() {
    return this.state.encrypt ? 
    <Encrypt changeView={this.changeView}
             plaintext={this.state.plaintext}
             plaintextChange={this.plaintextChange}
             secretKey={this.state.key}
             secretKeyChange={this.keyChange} /> : 
    <Decrypt changeView={this.changeView}
             plaintext={this.state.plaintext}
             secretKey={this.state.key}/>
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Caesar Cipher</h1>
        </header>
        <div>
          {this.getView()}
        </div>
      </div>
    );
  }
}

export default App;
