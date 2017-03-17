import React, { Component } from 'react';
import { Link } from 'simple-react-router'

import Line from '../line';

export default (props) => (
	<Line>
		<div className="caption">
			<Link href={props.dest}>
				{props.label}
			</Link>
		</div>
	</Line>
);
