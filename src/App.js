import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Encrypt from './encrypt/Encrypt'
import Decrypt from './decrypt/Decrypt';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      encrypt: true
    };
  }

  setEncrypt = () => {
    this.setState({encrypt: true})
  }

  setDecrypt = () => {
    this.setState({encrypt: false})
  }

  getView() {
    return this.state.encrypt ? 
    <Encrypt /> : 
    <Decrypt plaintext={this.state.plaintext}
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
          <div onClick={this.setEncrypt}>Encrypt</div>
          <div onClick={this.setDecrypt}>Decrypt</div>
        </div>
        <div>
          {this.getView()}
        </div>
      </div>
    );
  }
}

export default App;
