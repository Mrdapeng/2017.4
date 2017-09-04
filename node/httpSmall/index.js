var express = require('express')
var app = express()
app.get('/', function (req, res) {
    res.send('<a href="/test204">test204</a> <a href="test205">test205</a> <a href="test206"></a>')

})
var server =app.listen('3000',function () {
    var host= server.address().address;
    var port =server.address().port;
    console.log(host)
    console.log(port)
})