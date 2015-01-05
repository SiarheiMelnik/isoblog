'use strict';

var React = require('react');
var App = require('./components/App.react');

var state = JSON.parse(document.getElementById('state').innerHTML);

React.render(
    <App posts={ state } />,
    document.getElementById('app')
);