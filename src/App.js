import React, { Component } from 'react';
import './css/style.css';

import Line from './components/line';

export default class App extends Component {
  render() {
    return (
		<div className='container'>
  			<Line label="illustrations by Icaro Olivera"/>
  			<Line label="videos" />
  			<Line label="music" />
	  	</div>
    );
  }
}
