import React, { Component } from 'react';

export default (props) => (
	<div className='imageContainer'>
		<img className='image' src={props.image} />
		<p className='comment'>{props.comment}</p>
	</div>
);
