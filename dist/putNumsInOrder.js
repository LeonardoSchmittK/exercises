"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var putDigitsInOrder = function (digit) {
    var digits = __spreadArray([], digit);
    var numbers = digits.map(function (d) { return +d; });
    var sortedNumbers = numbers.sort(function (a, b) { return b - a; });
    return sortedNumbers.join('');
};
console.log(putDigitsInOrder('145263 '));
//# sourceMappingURL=putNumsInOrder.js.map