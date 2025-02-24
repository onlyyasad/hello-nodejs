const http = require('http');

// creating a server with raw node.js

const server = http.createServer();

// listener

server.on('request', (req, res) =>{
    console.log(req.url, req.method);
    res.end("Hello world!")
})

server.listen(5000, () =>{
    console.log(`Server is listening on port 5000.`)
})