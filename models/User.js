'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    }
});

mongoose.model('User', UserSchema);
