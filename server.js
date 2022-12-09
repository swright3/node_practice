const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    
    var path = './pages/';

    switch (req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            break;
    }

    fs.readFile(path, (err, data) => {
        err ? console.log(err) : res.end(data);
    })
})

server.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000');
})