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

    if (target != oBtn && target != op && target != oSpan) {
        oUL.style.display = 'none';
    }
    ;

};

/*弹层*/


var oSmallImg = getClass('small-img')[0];
var aDialogLi = oSmallImg.getElementsByTagName('li');
var oDialogBox = getClass('mask')[0];
var oDialogBody = getClass('dialog-body', oDialogBox)[0];
var oDialogImg = oDialogBody.getElementsByTagName('img')[0];
var oDialogClose = getClass('dialog-close', oDialogBox)[0];
var oDialogPrev = getClass('dialog-prev', oDialogBox)[0];
var oDialpgNext = getClass('dialog-next', oDialogBox)[0];
var oSlideDown = getClass('slide-btn')[0];
var oContent = getClass('content',oDialogBox)[0];
var iNow = 0;
for (var i = 0; i < aDialogLi.length; i++) {
    aDialogLi[i].index = i;
    aDialogLi[i].onclick = function () {
        var oImg = this.getElementsByTagName('img')[0];
        oDialogBox.style.display = 'block';
        oDialogImg.src = oImg.src;
        oContent.style.animation = 'show 1s ease forwards';
        iNow = this.index;
    }
}
// 关闭弹层
oDialogBox.onclick = function (e) {
    var target = e.target || event.srcElement;
    if (target == oDialogBox || target == oDialogClose) {
        oDialogBox.style.display = 'none';
    }
};
oDialpgNext.onclick = oDialogPrev.onclick = function () {
    if (this == oDialogPrev) {
        iNow--;
        if (iNow == -1) {
            iNow = aDialogLi.length - 1;
        }
        var prevLi = aDialogLi[iNow];
        oDialogImg.src = prevLi.getElementsByTagName('img')[0].src;
    } else {
        iNow++;
        if (iNow == aDialogLi.length) {
            iNow = 0;
        }
        var prevLi = aDialogLi[iNow];
        oDialogImg.src = prevLi.getElementsByTagName('img')[0].src;
    }

};
var timer = '';

oSlideDown.onclick = function () {
    if (timer) {
        clearInterval(timer);
        timer = '';
    } else {
        timer = setInterval(function () {
            oDialogPrev.onclick();

        }, 1000)
    }
}


