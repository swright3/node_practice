const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Received request')
})

server.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000')
})