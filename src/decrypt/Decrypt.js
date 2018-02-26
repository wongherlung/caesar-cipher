import React, { Component } from 'react';
import { isAllowableChar } from '../helpers'
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import Paper from 'material-ui/Paper';

class Decrypt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ciphertext: 'zk zj kyv veu fw kyv givjvekrkzfe',
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

  secretKeyChange = (e, val) => {
    this.setState({secretKey: val})
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

  getOutput = (style) => {
    var plaintext = this.getPlainText()
    if (plaintext) {
      return (
        <Paper style={style}>
          <p>{plaintext}</p>
        </Paper>
      )
    }
  }

  render() {
    var divStyle = {
      textAlign: 'center',
      paddingTop: '25px'
    }

    var sliderDivStyle = {
      marginTop: '50px',
    }

    var sliderStyle = {
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto'
    }

    var paperStyle = {
      padding: '25px',
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto'
    }

    return (
      <div style={divStyle}>
        <TextField floatingLabelText="String to decrypt" 
          value={this.state.ciphertext} 
          onChange={this.ciphertextChange} />

        <div style={sliderDivStyle}>
          Key: {this.state.secretKey}
          <Slider defaultValue={1}
            style={sliderStyle}
            step={1} 
            min={1} 
            max={26}
            value={this.state.secretKey}
            onChange={this.secretKeyChange} />
        </div>


        {this.getOutput(paperStyle)}
      </div>
    );
  }
}

export default Decrypt;
