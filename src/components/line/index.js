import React, { Component } from 'react';

import Caption from './components/caption';
import Link from './components/link';

export default (props) => (
	<div className="line">
		{ props.children }
	</div>
);
