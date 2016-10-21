/**
 * Created by huzhenzhe on 10/21/16.
 */
var compression = require('compression');
var express = require('express');
var serveStatic = require('serve-static');
var app = express();

app.use('/', serveStatic('public', {
    maxAge: '5d',
    setHeaders: setStaticAssetsCacheControl
}));

app.use(compression());
app.use(require("servers.js"));

function setStaticAssetsCacheControl(res, path) {
    if (serveStatic.mime.lookup(path) === 'text/html' || serveStatic.mime.lookup(path) === 'text/css' || serveStatic.mime.lookup(path) === 'text/javascript') {
        res.setHeader('Cache-Control','public, max-age=604800');
    }
}