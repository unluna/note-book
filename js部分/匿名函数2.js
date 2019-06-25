
(function () {
    console.log(a);  // undefined
    var a = 25;
})();

// 等价于
(function () {
    var a;
    console.log(a);  // undefined
    a = 25;
})();

// (function () {
//     console.log(a); //  a is not defined
//     let a = 25;
// })();
