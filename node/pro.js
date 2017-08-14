var pro = {
    name: 'lrp',
    'fileData': [
        {
            name: 'css',
            type: 'dir'
        },
        {
            name: 'js',
            type: 'dir'
        },
        {
            name: 'html',
            type: 'dir'
        },
        {
            name: 'img',
            type: 'dir'
        },{
            name:'index.html',
            type:'file',
        }
    ]
}
var fs =require('fs')
if(pro.name){
    fs.mkdir(pro.name,function () {
        console.log(arguments)
    })
}