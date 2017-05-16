import React, { Component } from 'react';
import './App.css';
import Summary from './Summary'
import Pastime from './Pastime'
import Places from './Places'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      spots: [
        {name: 'New Zealand'},
        {name: 'South Africa'},
        {name: 'Serbia'}
      ]
    }
  }
  render() {
    return (
      <div className='container'>
        <h1 className='greeting'>Meet Mitch McDougal</h1>
        <div className='row' >
          <Summary />
        </div>
        <div className='row'>
          <div className='places'>
            <Places spots={this.state.spots}/>
          </div>
          <div className='pastime'>
            <Pastime  />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
