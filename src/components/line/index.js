import React, { Component } from 'react';

import Caption from './components/caption';

export default (props) => (
	<div className="line">
		<Caption label={props.label} />
	</div>
);
