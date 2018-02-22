import React, { Component } from 'react';
import { isAllowableChar } from '../helpers'
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import Paper from 'material-ui/Paper';

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

  secretKeyChange = (e, val) => {
    this.setState({secretKey: val})
  }

  getOutput = (style) => {
    var cipherText = this.getCiphertext()
    if (cipherText) {
      return (
        <Paper style={style}>
          <p>{cipherText}</p>
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
        <TextField floatingLabelText="String to encrypt" 
          value={this.state.plaintext} 
          onChange={this.plaintextChange} />

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

export default Encrypt;
