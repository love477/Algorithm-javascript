"use strict";
exports.__esModule = true;
exports.descartes = void 0;
var result = [];
function descartes(input, index, tempResult) {
    if (tempResult === void 0) { tempResult = []; }
    if (index >= input.length) {
        result.push(tempResult);
        return;
    }
    var arr = input[index];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var v = arr_1[_i];
        var tempResult1 = tempResult.slice(0, tempResult.length);
        tempResult1.push(v);
        descartes(input, index + 1, tempResult1);
    }
}
exports.descartes = descartes;
descartes([['a', 'b'], ['c', 'd'], ['e', 'f', 'g']], 0);
var a = result.map(function (v) { return v.toString().replace(/,/g, ''); });
console.log(a);
// 分先后、审大小、定善恶、知行合一
