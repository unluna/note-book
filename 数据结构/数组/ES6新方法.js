/*
* from:复制数组
* of:添加值
* fill:填充 fill(value, startIndex, endIndex)
* copyWithin:把数组本身的某段 连续的元素 替换到该数组的某一个位置 copyWithin(target, startIndex, endIndex)
* */
let number1 = [1, 2, 3];
let number2 = Array.from(number1);  // [ 1, 2, 3]
let number3 = Array.of(number1, ...number1);  // [ [ 1, 2, 3 ], 1, 2, 3 ]
let number4 = [1, 2, 3, 4, 5, 6]
    .fill("🍒", 2, 4);  // [ 1, 2, '🍒', '🍒', 5, 6 ]
let number5 = [1, 2, 3, 4, 5, 6]
    .copyWithin(1, 3, 5);  // [ 1, 4, 5, 4, 5, 6 ]

console.log(number2);
console.log(number3);
console.log(number4);
console.log(number5);
