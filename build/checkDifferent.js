"use strict";
exports.__esModule = true;
function checkDifferent(iniString) {
    if (!iniString) {
        return false;
    }
    for (var index = 0; index < iniString.length; index++) {
        var regexp = new RegExp('iniString.charAt(index)', 'g');
        var result = iniString.match(regexp);
        if (result && result.length > 1) {
            return false;
        }
    }
    return true;
}
exports.checkDifferent = checkDifferent;
console.log('result: ', checkDifferent('abcda'));
