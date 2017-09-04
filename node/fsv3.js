var http = require('http')
var url = require('url')
var fs = require('fs')
var queryString = require('querystring')
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
            case '/login':
                sendData('./login.html', req, res)
                break
            case'/login/check':
                // console.log(req.method)
                // console.log(queryString.parse(urlstr.query))
                if(req.method.toUpperCase()==='POST'){
                    var str=''
                    req.on('data',function (chunk) {
                        str+=chunk
                    })
                    req.on('end',function () {
                        console.log(queryString.parse(str))
                    })
                }else{
                    console.log('err')
                }
                
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
    .listen(8082, 'localhost')