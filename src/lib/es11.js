import 'core-js/es/promise/all-settled'

// es11
setTimeout(function () {
    // bitint
    (function () {
        // polyfill比较难
        if (!window.document.documentMode) {
            let bi1 = BigInt(2 ** 100);
            let bi2 = BigInt(3 ** 64);
            console.log('es11-bigint', bi1, bi2, bi1 + bi2);
        }
    })();

    // import
    (function () {
        import('./es10').then(function (args) {
            console.log('es11-import-dynamic', args);
        });
    })();

    // Promise.allSettled
    (function () {
        Promise.allSettled([Promise.resolve(1), Promise.reject(2)]).then(function (args) {
            console.log('es11-promise-allSettled', args);
        });
    })();

    // 可选链
    (function (a = 'abc', b) {
        console.log('es11-可选链', a?.trim(), b?.trim());
    })();

    // 空值合并
    (function (a = 'abc', b) {
        console.log('es11-空值合并', a ?? 'aaa', b ?? 'bbb');
    })();

    // 导出内容
    (function () {
        // export * as ns from 'a.js';
    })();
}, 1000);
