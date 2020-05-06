"use strict";
exports.__esModule = true;
// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
function reverse(input) {
    var inputStrArr = input.toString().split('');
    var result = '';
    while (inputStrArr.length > 0) {
        result = result.concat(inputStrArr.pop());
    }
    return Number(result);
}
exports.reverse = reverse;
