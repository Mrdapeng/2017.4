/*
* http模块
* listen方法的参数
* listen(port,[hostname],[backlog],[callback])
*
* port 端口号
* hostname 主机名
* backlog连接等待队列的最大长度
* callback调用listen后开始监听之后，会出发一个listening事件，callback 将作为该事件的执行函数
* */
// var http=require('http')
// var server =http.createServer()
// server.on('error',function (err) {
//     console.log(err)
// })
// server.on('listening',function (suecess) {
//     console.log('is running')
// })
// server.on('request',function () {
//     console.log('is be request')
// })
//
// server.listen(8080,"localhost")
var http = require('http')
var URL=require('url')
var server = http.createServer(
    // function () {
    // console.log('is be request')}
)
    .on('request', function (req, res) {
        console.log(URL.parse(req.url))
        var testURL=URL.parse('http://ww.baidu.com/a/index.html?b=2')
        console.log(testURL)
        // res.write('我要被返回了','utf-8')
        res.setHeader('node','ccc')
        res.writeHead(200, 'very ok', {
            'content-type': 'text/html;charset=utf-8',
        })
        res.write('<h1>中</h1>')
        res.end()
// console.log(r、eq.http)
// console.log(req.header.cookie)
    })
    .on('err', function (err) {
        console.log(err)
    })
    .on('listening', function () {
        console.log('is running')
    }).listen(8080, 'localhost')