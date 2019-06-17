/*
* 迷你shift
* */
//PS:这个真的好麻烦啊，最后一项是undefined

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype._removeUndefined = function (arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) {
            newArr.push(arr[i])
        }
    }
    return newArr;
};

Array.prototype._shift = function () {

    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
    }
    // this.pop();

    return this._removeUndefined(this);
};
// arr._shift();
arr = arr.shift();
console.log(arr);
