import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Tabs, Tab} from 'material-ui/Tabs';

import Encrypt from './encrypt/Encrypt'
import Decrypt from './decrypt/Decrypt';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src="scissor.png" className="App-logo" alt="logo" />
            <img src="sai.png" className="App-logo" alt="logo" />
            <img src="fur.png" className="App-logo" alt="logo" />
            <h1 className="App-title">dbftbs djqifs</h1>
          </header>

          <Tabs>
            <Tab label="Encrypt" >
              <Encrypt />
            </Tab>
            <Tab label="Decrypt" >
              <Decrypt />
            </Tab>
          </Tabs>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
