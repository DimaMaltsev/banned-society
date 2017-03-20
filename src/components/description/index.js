import React, { Component } from 'react';

import X from '../x';

import Header from './components/header';

export default class App extends Component {
  render() {
    return (
  		<div className='container'>
        <X />

        <Header />
  	  </div>
    );
  }
}
