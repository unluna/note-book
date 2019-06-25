var a = {n:1};
var b = a; // 持有a，以回查
a.x = a = {n:2};
console.log(a.x);// --> undefined
console.log(b.x);// --> {n:2}</span>
console.log(a);
console.log(b);
