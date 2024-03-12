const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end("Hey what's up?")
    }
})

server.listen(3000, () => {
    console.log('listening on port 3000...')
})