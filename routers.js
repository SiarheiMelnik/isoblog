'use strict';

var JSX = require('node-jsx').install(),
    React = require('react'),
    App = React.createFactory(require('./components/App.react'));

module.exports = {
    index: function*() {
        var markup = React.renderToString(
            App({
                posts: []
            })
        );

        yield this.render('index', {
            title: 'Undefined',
            markup: markup,
            state: JSON.stringify({posts: []})
        }); 
    },
    posts: function *(from, to) {
        this.body = 'posts';
    }
};