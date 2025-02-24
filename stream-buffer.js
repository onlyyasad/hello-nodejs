const http = require('http');
const fs = require('fs');

// creating a server with raw node.js

const server = http.createServer();

// listener

server.on('request', (req, res) =>{
    console.log(req.url, req.method);
    if(req.url === "/read-file" && req.method === "GET"){
        const readableStream = fs.createReadStream(process.cwd() + '/texts/long-read.txt');

        readableStream.on('data', (buffer) => {
            res.write(buffer)
        })
        readableStream.on('end', ()=>{
            res.end("Streaming ended.")
        })
    
    }else{
        res.end("Hello world!")
    }

})

server.listen(5000, () =>{
    console.log(`Server is listening on port 5000.`)
})