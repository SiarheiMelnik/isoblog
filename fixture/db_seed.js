require('../models');

var mongoose = require('mongoose'),
    Post = mongoose.model('Post');

mongoose.connect('mongodb://localhost:27017/isoblog');

mongoose.connection.on('error', function (err) {
    console.log(err);
});

function cd() {
     var post = new Post({
        title: 'Hello',
        body: 'Hi'
    });
     post.save(function(){
        console.log('done');
     });
}

Post.collection.remove(cd);