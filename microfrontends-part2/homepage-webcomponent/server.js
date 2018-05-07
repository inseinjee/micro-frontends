const express = require('express');
const server = express();
const request = require('request');
const proxy = require('http-proxy-middleware');

server.set('view engine', 'ejs');

const createProxy = (path, target) =>
  server.use(path, proxy({ target, changeOrigin: true, ignorePath: true }));

createProxy('/header', 'http://localhost:8081');
createProxy('/products', 'http://localhost:8082');
createProxy('/cart', 'http://localhost:8083');

server.get('/', (req, res) => res.render('index'));

const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log(`Homepage listening on port ${port}`);
});