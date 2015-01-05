'use strict';

require('node-jsx').install();

var React = require('react'),
    mongoose = require('mongoose'),
    Post = require('./models/Post'),
    App = React.createFactory(require('./components/App.react'));

module.exports = {
    index: function *() {
        var posts = yield Post.init(),
            state = {
                posts: posts || []
            },
            markup = React.renderToString(
                App(state)
            );

        yield this.render('index', {
            title: 'Undefined',
            markup: markup,
            state: JSON.stringify(state)
        }); 
    },
    posts: function *(from, to) {
        this.body = 'posts';
    }
};