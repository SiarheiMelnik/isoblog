'use strict';

var React = require('react'),
	NavBar = require('./NavBar.react'),
	PostList = require('./PostList.react');

var App = React.createClass({
	getInitialState: function(props){
		props = props || this.props;
		return {
			posts: props.posts
		}
	},
	render: function() {
		return (
			<div className="layout">
				<NavBar />
				<PostList posts={this.state.posts}/>
			</div>
		)
	}
});

module.exports = App;