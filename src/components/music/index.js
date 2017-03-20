import React, { Component } from 'react';

import X from '../x';

import Soundcloud from './components/soundcloud';

export default class App extends Component {
  render() {
    return (
  		<div className='container'>
        <X />

        <div className='musicContainer'>
          <Soundcloud trackId='308231048' />
          <Soundcloud trackId='308231042' />
          <Soundcloud trackId='308231038' />
          <Soundcloud trackId='313255681' />
        </div>
  	  </div>
    );
  }
}
