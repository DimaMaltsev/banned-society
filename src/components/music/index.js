import React, { Component } from 'react';

import X from '../x';

import Soundcloud from './components/soundcloud';

export default class App extends Component {
  render() {
    return (
  		<div className='container'>
        <X />

        <Soundcloud trackId='308231048' />
        <Soundcloud trackId='308231042' />
        <Soundcloud trackId='308231038' />
        <Soundcloud trackId='313255681' />

        <iframe 
          width="350"
          height="470"
          frameBorder="no"
          src="https://bandcamp.com/EmbeddedPlayer/album=1563191727/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless>
          <a href="http://kickitrecords.bandcamp.com/album/city-groove-2">
            City Groove by Price Beats
          </a>
        </iframe>
  	  </div>
    );
  }
}
