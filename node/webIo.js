/**
 * Created by Administrator on 2017/5/27.
 */
var http = require('http'), urls = ['www.baidu.com', 'www.tecent.com', "www.cctv.cn"];

function getPage(url) {
    var start = new Date();
    http.get({host: url}, function (res) {
        console.log('got res from' + url);
        console.log('the time is ' , new Date() - start);
    });
}


for (var i = 0; i < urls.length; i++) {

    getPage(urls[i]);

}