import React, { Component } from 'react';

import Line from '../line';

export default (props) => (
	<Line>
		<span className="caption">{props.label}</span>
	</Line>
);
