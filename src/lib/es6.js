// es6
setTimeout(function () {
    // 基础
    let lets = 'es6-lets';
    const consts = 'es6-consts';
    const deconstruct = [...[1, 2, 3], { ...{ a: 4, b: 5 } }];

    // 字符串
    (function (str = 'abc') {
        console.log('es6-string-模板字符串：', `ss-${str}...`);
        console.log('es6-string-includes', str.includes('a'));
        console.log('es6-string-startsWith', str.startsWith('a'));
        console.log('es6-string-endsWith', str.startsWith('c'));
    })();

    // 函数
    (function (str = 'abc') {
        console.log('es6-function-参数默认值', str);
        console.log('es6-function-箭头函数', () => 1);
        console.log('es6-function-对象函数简写', {
            calc() {
                return str;
            }
        });
    })();

    // 数组
    (function (arr = [1, 2, 3]) {
        console.log(
            'es6-array-map',
            arr.map((v) => v + 1)
        );
        console.log(
            'es6-array-reduce',
            arr.reduce((s, v) => s + v, 0)
        );
    })();

    // 对象
    (function (str = 'abc') {
        console.log('es6-object-属性简写', { str });
    })();

    // promise
    (function () {
        console.log('es6-promise', new Promise(() => 0));
    })();

    // map、set
    (function () {
        console.log('es6-map', new Map());
        console.log('es6-set', new Set());
    })();

    // class
    (function () {
        console.log(
            'es6-class',
            new (class Clazz {
                name = 'clazz';
                getName() {
                    console.log('class');
                }
            })()
        );
    })();

    // generator
    (function () {
        function* gen() {
            yield 1;
            yield 2;
        }
        let g1 = gen();
        while (g1) {
            console.log('es6-generator-yield', g1, (g1 = g1.next ? g1.next() : null));
        }
        let g2 = gen();
        for (let g of g2) {
            console.log('es6-generator-for/of', g);
        }
    })();
}, 0);
