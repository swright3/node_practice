const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    
    fs.readFile('./index.html', (err, data) => {
        err ? console.log(err) : res.end(data);
    })
})

server.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000');
})