import React, { Component } from 'react';

import X from '../x';
import Header from './components/header';
import Video from './components/video';

import goods from './videos/goods_small.m4v';
import goodsPlaceholder from './videos/goods_placeholder.png';

import nextTime from './videos/next_time_small.m4v';
import nextTimePlaceholder from './videos/next_time_placeholder.png';

import cuddles from './videos/cuddles_small.m4v';
import cuddlesPlaceholder from './videos/cuddles_placeholder.png';

export default class App extends Component {
  render() {
    return (
  		<div className='container'>
        <X />

        <Header />

        <Video
          src={goods}
          placeholder={goodsPlaceholder}
          comment='goods'
        />

        <Video
          src={nextTime}
          placeholder={nextTimePlaceholder}
          comment='next time'
        />

        <Video
          src={cuddles}
          placeholder={cuddlesPlaceholder}
          comment='cuddles'
        />
  	  </div>
    );
  }
}
