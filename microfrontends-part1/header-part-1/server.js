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
        //const rootElem = '<div id="header-root">';
        // const renderedApp = renderToString(React.createElement(App, null));
        // renderedString = html.replace(rootElem, rootElem + renderedApp);
        // console.log(renderedString);
        //res.send(renderedString);
        res.send(html);
    });
});

server.use(express.static('build'));

const port = process.env.PORT || 8081;
server.listen(port, () => {
    console.log(`App listening on port ${port}`);
});