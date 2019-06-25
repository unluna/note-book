this.a = 20; // window.a = 20;
var p = {
    a: 30,
    test: function () {

        function s() {
            // this.a = 60;
            console.log(this.a);
        }
        return s;
        // 注释1
        // s();
    }
};

(p.test())();  // 20
//相当于
// var s = p.test();
// s();

// 注释1
// p.test();

