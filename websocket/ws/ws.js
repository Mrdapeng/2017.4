    var ws = require('nodejs-websocket')
    var port = 8001
    var clientConent = 0
    var server = ws.createServer(function (connect) {
    console.log('new connection')
    clientConent++
    connect.nickname = 'user' + clientConent
    var msg = {}
    msg.type = 'enter'
    msg.data = connect.nickname + 'comes in'
    broadCast(JSON.stringify(msg))
    connect.on('text', function (str) {
        var msg = {}
        msg.type = 'msg'
        msg.data = connect.nickname + 'say'+str
        broadCast(JSON.stringify(msg))
    })

    connect.on('close', function (code, reason) {
        var msg = {}
        msg.type = 'leave'
        msg.data = connect.nickname + 'left out'
        broadCast(JSON.stringify(msg))


    })

    connect.on('error', function (err) {
        console.log('handle err')
        console.log(err)
    })

}).listen(port)

function broadCast(str) {
    server.connections.forEach(function (connection) {
        connection.send(str)
    })
}

console.log('serve is running at' + port)