import React, { Component } from 'react';

import Header from '../../components/header';
import Caption from '../../components/caption';
import Footer from '../../components/footer';

export default class App extends Component {
  render() {
    return (
  		<div className='container'>
  			<Header />
  			<Caption label="visuals by Icaro Olivera" dest="/visuals"/>
  			<Caption label="videos" />
  			<Caption label="music" />
  			<Footer />
  	  </div>
    );
  }
}
