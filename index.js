const http = require('http');
const url = require('url')
const fs = require('fs')

http.createServer((req, res) => {
    const q = url.parse(req.url, true)
    const filename = '.' + q.pathname
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        })
    } else if (req.url === '/about.html' || req.url === '/contact-me.html') {
        fs.readFile(filename, (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        })
    } else {
        fs.readFile('404.html', (err, data) => {
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        })
    }
}).listen(8080);