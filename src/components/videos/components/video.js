import React, { Component } from 'react';

export default class Video extends Component {
	constructor(props) {
		super(props);

		this.ref = '';

		this.onClick = this.onClick.bind(this);
	}

	onClick() {
	  if(this.ref.paused) {
	    this.ref.currentTime = 0;
	    this.ref.play();
	  } else {
	    this.ref.pause();
	  }
	}

	render() {
		return (
			<div className='video'>
				<video
			      ref={(ref) => { this.ref = ref; }}
			      onClick={this.onClick}
			      src={this.props.src}
			      poster={this.props.placeholder}
			      width='80%'
			    />
		   	</div>
	    );
	}
}
