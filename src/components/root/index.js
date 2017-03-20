import React, { Component } from 'react';

import Header from './components/header';
import Caption from './components/caption';
import Footer from './components/footer';

export default class App extends Component {
  render() {
    return (
  		<div className='container'>
  			<Header dest="/project"/>
  			<Caption label="visuals by Ícaro Oliveira" dest="/visuals"/>
  			<Caption label="videos" dest="/videos"/>
  			<Caption label="music" dest="/music"/>
  			<Footer />
  	  </div>
    );
  }
}
