import React, { Component } from 'react';

import X from '../x';

import Header from './components/header';

import flood from './images/flood.jpg';
import desertcleaner from './images/desertcleaner.jpg';
import lunchbreak from './images/lunchbreak.jpg';
import bombfield from './images/bombfield.jpg';
import canyonfisherman from './images/canyonfisherman.jpg';

import Image from './components/image';

export default class App extends Component {
  render() {
    return (
  		<div className='container'>
        <X />
        <Header />
        <Image image={flood} comment='flood'/>
        <Image image={desertcleaner} comment='desert cleaner'/>
        <Image image={lunchbreak} comment='lunch break'/>
        <Image image={bombfield} comment='bomb field'/>
        <Image image={canyonfisherman} comment='canyon fisherman'/>
  	  </div>
    );
  }
}
