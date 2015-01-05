'use strict';

var React = require('react'),
    PostItem = require('./PostItem.react');

var PostList = React.createClass({
    render: function() {
        var content = this.props.posts.map(function(post){
            return (
                <PostItem key={post._id} post={post} />
            )
        });
        
        return (
            <div className="content">
                {content}
            </div>
        )
    }
});

module.exports = PostList;