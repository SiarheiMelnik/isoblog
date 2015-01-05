'use strict';

var koa = require('koa'),
    compose = require('koa-compose'),
    router = require('koa-router'),
    routers = require('./routers'),
    mongoose = require('mongoose'),
    serve = require('koa-static'),
    handlebars = require('koa-handlebars'),
    path = require('path'),
    http = require('http'),
    port =  process.env.PORT || 5000,
    app = koa();

var middleware = compose([
    serve(path.join(__dirname, 'public')),
    serve(path.join(__dirname, 'build')),
    handlebars({
        defaultLayout: 'main',
        viewsDir: 'views',
        layoutPath: function (id) {
            var o = this.options;
            return path.resolve(o.root, o.viewsDir, o.layoutsDir, id + o.extension);
        }
    }),
    router(app)
]);

mongoose.connect('mongodb://localhost:27017/isoblog');

mongoose.connection.on('error', function (err) {
    console.log(err);
});

app.use(middleware);

app.get('/', routers.index);

app.get('/api/v1/posts/:from/:to', routers.posts);

http.createServer(app.callback())
    .listen(port);