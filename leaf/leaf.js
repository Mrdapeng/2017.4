/**
 * Created by Administrator on 2017/5/17.
 */
var screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
var screenHeight = document.documentElement.clientHeight || document.body.clientHeight;

function LEAF(speed, width, height) {
    var that = this;
    this.speed = 5;
    this.width = 100 + (Math.random() * 50);
    this.postion = {
        left: Math.random() * (screenWidth - this.width),
        top: 0
    },
        this.oImg = new Image();
    this.oImg.src = ( Math.floor(Math.random() * 4) + 1 ) + ".jpg";
    this.oImg.style.width = this.width + 'px';
    this.oImg.style.left = this.postion.left + 'px';
    document.body.appendChild(this.oImg);
}

LEAF.prototype.fall = function () {
    var _this = this;
    setTimeout(function () {
     _this.timer=  setInterval(function () {
            if (_this.oImg.offsetTop>screenHeight-_this.width){
                clearInterval(_this.timer);
            }else {
                _this.oImg.style.top = _this.oImg.offsetTop + 5 + 'px';
            }

        }, 30)
    }, 1000 * Math.random())


};
var aLeaf = [];
for (var i = 0; i < 7; i++) {
    var oLeaf = new LEAF();
    aLeaf.push(oLeaf);
}
document.onclick = function () {
    for (var i = 0; i < aLeaf.length; i++) {
        aLeaf[i].fall();

    }
};
