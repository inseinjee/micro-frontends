const express = require('express');
const server = express();
const request = require('request');

server.set('view engine', 'ejs');

server.get('/', (req, res) =>
    Promise.all([
        getContents('http://localhost:8081/'),
        getContents('http://localhost:8082/'),
        getContents('http://localhost:8083/')
    ]).then(responses =>
        res.render('index', { header: responses[0], productsList: responses[1], cart: responses[2] })
    ).catch(error =>
        res.send(error.message)
    )
);
const getContents = (url) => new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
        
        if (error) return resolve("Error loading " + url + ": " + error.message);

        return resolve(body);
    });
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log(`Homepage listening on port ${port}`);
});