import React, { Component } from 'react';

export default (props) => (
	<div className='imageContainer'>
		<img className='image' src={props.image} />
		<p className='imageComment'>{props.comment}</p>
	</div>
);
