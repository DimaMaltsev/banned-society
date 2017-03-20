import React, { Component } from 'react';

const getSrc = (props) => {
	return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${props.trackId}&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true`
}

export default (props) => (
	<iframe
	  className="track"
      width="600"
      height="175"
      scrolling="no"
      frameBorder="no"
      src={getSrc(props)}
    ></iframe>
);
