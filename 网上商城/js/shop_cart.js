/**
 * Created by Administrator on 2017/4/23.
 */
// var oSum = document.getElementById('sum'),
//     check1 = document.getElementById('check1'),
//     check2 = document.getElementById('check2');
// oSum.onclick = function () {
//     if (oSum.checked == true) {
//
//         check1.checked = true;
//         check2.checked = true;
//         check1.className = 'select';
//         check2.className = 'select';
//
//     } else {
//         check2.checked = false;
//         check1.checked = false;
//         check1.className = '';
//         check2.className = '';
//     }
//
// };
// check1.onclick = check2.onclick = function () {
//     if (oSum.checked === true && this.checked === false) {
//         oSum.checked = false;
//         check1.className = '';
//         check2.className = '';
//     } else if (check1.checked === true && check2.checked === true) {
//         oSum.checked = true;
//         check1.className = 'select';
//         check2.className = 'select';
//     }
//
// };


var oTbody = document.getElementsByTagName('tbody')[0];
var aTr = oTbody.getElementsByTagName('tr');
var oSum = document.getElementById('sum');
var btn_check = getClass('btn-check', oTbody);
/*老师版本*/
// oSum.onclick = function () {
//
//     for (var i = 0; i < aTr.length; i++) {
//         if (oSum.checked === true) {
//
//             aTr[i].className = 'selected';
//             btn_check[i].checked = true;
//         } else {
//             aTr[i].className = '';
//             btn_check[i].checked = false;
//         }
//
//     }
// };
// oSum.onclick = function () {
//     console.log(this.checked);
//     for (var i = 0; i < btn_check.length; i++) {
//
//         if (this.checked === true) {
//             aTr[i].className = 'selected';
//         } else {
//             aTr[i].className = '';
//         }
//         btn_check[i].checked = this.checked;
//     }
//
//
// }

for (var i = 0; i < aTr.length; i++) {
    aTr[i].onclick = function () {
        var ocheck = this.getElementsByTagName('input')[0];

        if (this.className == 'selected') {
            this.className = '';
            ocheck.checked = false;
        } else {
            this.className = 'selected';
            ocheck.checked = true;
        }
        //所有被选中的tr
        var aCheckTr = getClass('selected', oTbody);
        if (aCheckTr.length == aTr.length) {
            oSum.checked = true;
        } else {
            oSum.checked = false;
        }

    }

}

var oThead = document.getElementsByTagName('thead')[0];
var oTr = oThead.getElementsByTagName('tr')[0];
oTr.onclick = function (e) {
    var target = e.target || event.srcElement;
    if (target != oSum) {
        oSum.checked = !oSum.checked;
    }

    for (var i = 0; i < aTr.length; i++) {
            if (this.checked === true) {
                aTr[i].className = 'selected';
            } else {
                aTr[i].className = '';
            }
            btn_check[i].checked = oSum.checked;
        }


};


