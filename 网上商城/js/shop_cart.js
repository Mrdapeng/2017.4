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
        var oSum = document.getElementById('sum');
        if (aCheckTr.length == aTr.length) {
            oSum.checked = true;
        } else {
            oSum.checked=false;
        }

    }


}

