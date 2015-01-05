'use strict';

var React = require('react');

var PostItem = React.createClass({
	render: function() {
		var post = this.props.post;
		return (
			<section className="post">
				<header className="post__header">
					<h2 className="post__title">{post.title}</h2>
				</header>
				<div className="post__description">
					<p>{post.body}</p>
				</div>
			</section>
		)
	}
});

module.exports = PostItem;