/**
 * Created by Administrator on 2017/5/27.
 */
let fs = require('fs');
let http = require('http');
// fs.readFile('1.txt', 'utf-8', function (erro, data) {
//     if (erro) {
//         throw  erro;
//     } else {
//         console.log(data);
//     }
// });
//
// http.get({host: 'www.baidu.com'}, function (res) {
//     console.log('i am ok');
//     console.log(res.ended);
// }).on('erro', function () {
//     console.log('it is too bad');
// });
//
// 重定向
http.createServer(function (req,res) {
    res.writeHead(301, {
        'Location': 'https://www.baidu.com'
    });
    res.end();
}).listen(3000, '127.0.0.1');
console.log('server is running at http://127.0.0.1');