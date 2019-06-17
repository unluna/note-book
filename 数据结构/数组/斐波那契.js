/*
* 求斐波那契数列的 前20个数字
* 第一个数字是 1
* 第二个数字是 1
* */
let fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 1;

for (let i = 0; i < 18; i++) {
    fibonacci[i+2]=fibonacci[i]+fibonacci[i+1];
}
for (let i = 0; i < 20; i++) {
    console.log(fibonacci[i]);
}
