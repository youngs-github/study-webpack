// es7
setTimeout(function () {
    // 数组
    (function (arr = [1, 2, 3]) {
        console.log('es7-array-includes', arr.includes(2), arr.includes(4));
    })();

    // 指数
    (function () {
        console.log('es7-number-指数简写', 2 ** 2, 2 ** 3);
    })();
}, 200);
