import React, { Component } from 'react';

import Header from './components/header';

import flood from './images/flood.jpg';
import desertcleaner from './images/desertcleaner.jpg';
import lunchbreak from './images/lunchbreak.jpg';
import bombfield from './images/bombfield.jpg';
import canyonfisherman from './images/canyonfisherman.jpg';

import Footer from './components/footer';

export default class App extends Component {
  render() {
    return (
  		<div className='container'>
        <Header />
        <img className='image' src={flood} />
        <img className='image' src={desertcleaner} />
        <img className='image' src={lunchbreak} />
        <img className='image' src={bombfield} />
        <img className='image' src={canyonfisherman} />
        <Footer />
  	  </div>
    );
  }
}
