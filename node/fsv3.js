var http = require('http')
var url = require('url')
var fs = require('fs')
var HtmlDir = __dirname

function sendData(file, req, res) {
    fs.readFile(file, function (err, data) {
        if (err) {
            res.writeHead(404, {
                'content-type': 'text/html;charset=utf-8'
            })
            res.end('<h1>被吃掉了</h1>')
        } else {
            res.writeHead(200, {
                'content-type': 'text/html;charset=utf-8'
            })
            res.end(data)

        }
    })
}

var server = http.createServer()
    .on('request', function (req, res) {
        var urlstr = url.parse(req.url)
        switch (urlstr.pathname) {
            case '/index':
                sendData('./index.html', req, res)
                break
            case '/user':
                sendData('./user.html', req, res)
                break
            default:
                res.writeHead(404, {
                    'content-type': 'text/html;charset=utf-8'
                })
                res.end('<h1>被吃掉了</h1>')
                break
        }
    })
    .on('listening', function () {
        console.log('is listening')
    })
    .listen(8080, 'localhost')