var fs= require('fs')
/*err 文件打开失败时候的错误信息
* fd 文件的打开标识,类似于设置定时器时候的编号
*
* */
fs.open('1.txt','r',function (err,fd) {
    if(err){
        console.log('is wrong')
    }else{
        console.log('file is ok')
        console.log(fd)
    }
})