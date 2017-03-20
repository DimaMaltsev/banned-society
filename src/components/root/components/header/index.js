import React, { Component } from 'react';
import { Link } from 'simple-react-router'

export default (props) => (
	<Link href={props.dest}>
		<span className="leftMenuItem">250d, 2000h</span>
	</Link>
);
