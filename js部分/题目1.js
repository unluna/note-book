this.a = 20; // window.a = 20;
var test = {
    a: 40,
    init: () => {
        console.log("1:"+this.a);

        function go() {
            this.a = 60;
            console.log("2:"+this.a);
        }

        go.prototype.a = 50;
        return go;
    }
};
// 如果是test.init(); // this 指向test
var p = test.init();
p(); // this 指向window
new(test.init())();


