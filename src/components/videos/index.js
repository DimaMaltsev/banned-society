import React, { Component } from 'react';

import X from '../x';
import Video from './components/video';

import goods from './videos/goods_small.m4v';
import goodsPlaceholder from './videos/goods_placeholder.png';

import nextTime from './videos/next_time_small.m4v';
import nextTimePlaceholder from './videos/next_time_placeholder.png';

export default class App extends Component {
  render() {
    return (
  		<div className='container'>
        <X />

        <Video
          src={goods}
          placeholder={goodsPlaceholder}
        />

        <Video
          src={nextTime}
          placeholder={nextTimePlaceholder}
        />
  	  </div>
    );
  }
}
