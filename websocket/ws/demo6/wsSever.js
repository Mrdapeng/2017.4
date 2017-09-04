var app = require('http').createServer(handler)
var io = require('socket.io')(app)
var fs = require('fs')
const  port =3001
app.listen(port)
console.log('sever is runninbg at'+port)
function handler(req, res) {
    fs.readFile(__dirname + '/index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500)
                return res.end('erro loading index.html')
            }
            res.writeHead(200)
            res.end(data)
        })
}

io.on('connection', function (socket) {
    socket.emit('news',{hello:'world'})
    socket.on('my other event',function (data) {
        console.log(data)
    })
})