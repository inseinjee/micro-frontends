const path = require('path');
const fs = require('fs');
const express = require('express');
const React = require('react');
const App = require('./transpiled/App.js').default;
const { renderToString } = require('react-dom/server');

const server = express();

server.get('/', (req, res) => {
    const htmlPath = path.resolve(__dirname, 'build', 'index.html');

    fs.readFile(htmlPath, 'utf8', (err, html) => {
        const rootElem = '<microfrontends-products-list>';
        const renderedApp = renderToString(React.createElement(App, null));
        const renderedHtml = html.replace(rootElem, rootElem + renderedApp);
        res.send(renderedHtml);
    });
});

server.use(express.static('build'));

const port = process.env.PORT || 8082;
server.listen(port, () => {
    console.log(`App listening on port ${port}`);
});