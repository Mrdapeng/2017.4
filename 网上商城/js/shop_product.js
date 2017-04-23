var oTabBox = document.getElementById('tab-box'),
    aLi = oTabBox.getElementsByTagName('li'),
    aDiv = getClass('tab-item', oTabBox);

for (var i = 0; i < aLi.length; i++) {
    aLi[i].index = i;
    aLi[i].onclick = function () {
        for (var j = 0; j < aDiv.length; j++) {
            aDiv[j].style.display = 'none';
            aLi[j].className = '';
        }
        this.className = 'active';
        aDiv[this.index].style.display = 'block';
    }
}


var oSelBox = document.getElementById('select-box');
var oBtn = getClass('sel-btn', oSelBox)[0];
var oUL = getClass('sel-menu', oSelBox)[0];
var oOption = oUL.getElementsByTagName('li');
var op = oBtn.getElementsByTagName('p')[0];
var oSpan = oBtn.getElementsByTagName('span')[0];
oBtn.onmousedown = function () {
    oSelBox.className = 'select-box selected';
};
oBtn.onmouseup = function () {
    oSelBox.className = 'select-box ';
    if (oUL.style.display == 'none' || oUL.style.display == '') {
        oUL.style.display = 'block';
    } else {
        oUL.style.display = 'none';
    }
};
for (var i = 0; i < oOption.length; i++) {

    oOption[i].onclick = function () {
        op.innerHTML = this.innerHTML;
        console.log(this.innerHTML);
        oUL.style.display = 'none';

    }
}
document.body.onclick = function (e) {
    /*ie取这个 取事件源 event.srcElement*/
    var target = e.target || event.srcElement;

    if (target != oBtn && target != op && target !=oSpan){
        oUL.style.display='none';
    };

};
// setInterval(function(){
// 	console.log("hahh");
// },3000)