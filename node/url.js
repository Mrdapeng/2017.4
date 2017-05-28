/**
 * Created by Administrator on 2017/5/27.
 */

// let url = require('url');
let http = require('http');
// let JuejinUrl = 'https://juejin.im/post/592923030ce46300576baeb8#comment';
// let port = url.parse(JuejinUrl).port;
// let PathName = url.parse(JuejinUrl).pathname;
// let hostName = url.parse(JuejinUrl).hostname;
// let aUrl=url.parse(JuejinUrl);
// console.log(port,PathName,hostName,aUrl);

let options = {
    host: 'baidu.com',
    port: 80,
    path: '/'
};

http.get(options, function (res) {

    if (res.statusCode == 200) {

        console.log('this web is ok');

    } else {
        console.log('this web is too bad');
    }


}).on('error', function (e) {
    console.log('the wrong is'+e.message);
});
