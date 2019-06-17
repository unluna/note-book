/*
* 迷你unshift方法
* */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype._unShift = function (value) {

    for (let i = this.length; i <= 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
};

arr._unShift(11);

console.log(arr);
