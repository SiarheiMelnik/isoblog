'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostShema = new Schema({
    title: {
        type: String,
        default: '',
        trim: true
    },
    body: {
        type: String,
        default: '',
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

PostShema.statics.init = function *() {
    return yield this.find({}, {})
        .sort({'createdAt': -1})
        .limit(10)
        .skip(0)
        .exec();
};

module.exports = mongoose.model('Post', PostShema);
