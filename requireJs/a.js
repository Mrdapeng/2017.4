require(['b'], function (isArray) {

    function sortArry(arr) {


        if (isArray(arr)) {
            return arr.sort(function (a, b) {
                return a - b;
            })
        } else {
            return '不是数字数组';
        }
        return sortArry();
    }
});