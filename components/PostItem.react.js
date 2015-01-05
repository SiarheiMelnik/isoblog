'use strict';

var React = require('react');

var PostItem = React.createClass({
	render: function() {
		var post = this.props.post;
		return (
			<li>
				<span>{post.title}</span>
				<span>{post.body}</span>
			</li>
		)
	}
});

module.exports = PostItem;