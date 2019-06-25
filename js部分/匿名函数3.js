(function () {
    var a = 25;
    var b = c = a;
})();

// 等价于
(function () {
    var a = 25;
    var b =25;
    c = a;
})();

console.log(c);  //25
