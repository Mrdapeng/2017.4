var fs = require('fs')
// var data =fs.readFile('../1.txt',"utf-8",function (err,str) {
//     console.log(str)
// })
// fs.unlink("../1.txt",function (err) {
//     console.log(err)
// })
// fs.readFile("./1.txt",function (err,data) {
//     if(err){
//         console.log('is wrong')
//         fs.close()
//     }else{
//         console.log(data)
//     }
// })
/*相当于句柄一样，是文件的标识*/
fs.open('./1.txt', 'r', function (err, fd) {
    if (err) {
        console.log('wrong ')
    } else {
        console.log(fd)
    }
})

console.log(process.env)
