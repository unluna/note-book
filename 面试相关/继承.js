function plane(color) {
    this.color = color;
}

plane.prototype.sayColor = function (color) {
    console.log(this.color);
};

function fiter(color) {
    plane.call(this, color);
}

let __proto = Object.create(plane.prototype);
__proto.constructor = fiter;
fiter.prototype = __proto;

let haha = new fiter("red");

haha.sayColor();
// console.log(haha);
