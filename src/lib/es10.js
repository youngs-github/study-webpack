// es10
setTimeout(function () {
    // JSON.stringify
    (function () {
        // 优化了utf-8规定的不能单独使用的部分
        console.log('es10-JSON.stringify', JSON.stringify('\uD834'));
        console.log('es10-JSON.stringify', JSON.stringify('\uD834\uDF06'));
    })();

    // arr：flat
    (function (arr = [1, [2, [3, [4, [5, [6, [7, [8]]]]]]]], depth = 5) {
        console.log('es10-arr-flat', arr.flat(depth));
        console.log(
            'es10-arr-flatMap',
            arr.flatMap((v) => v)
        );
    })();

    // trimStart、trimEnd
    (function (str = '  a b c    ') {
        console.log('es10-string-trimStart', str.trimStart());
        console.log('es10-string-trimEnd', str.trimEnd());
    })();

    // Object.fromEntries
    (function () {
        console.log(
            'es10-object-fromEntries',
            Object.fromEntries([
                ['a', 1],
                ['b', 2],
                ['c', 3]
            ])
        );
    })();

    // Symbol.description
    (function () {
        console.log('es10-symbol-description', Symbol('symbol').description);
        console.log('es10-symbol-description', Symbol.for('symbol.for').description);
    })();
}, 800);
