// es9
setTimeout(function () {
    // await + for
    (async function () {
        const promises = [1, 2, 3].map(function (v) {
            return new Promise(function (r) {
                setTimeout(function () {
                    r(v);
                }, 50);
            });
        });
        const timeStart = Date.now();
        for await (let p of promises) {
            console.log('es9-promise-for_await_of', p);
        }
        console.log('es9-promise-for_await_of', Date.now() - timeStart);
    })();

    // finally
    (function () {
        Promise.reject('test error')
            .catch((err) => {
                console.log('es9-promise-catch', err);
            })
            .finally((err) => {
                console.log('es9-promise-finally', err);
            });
    })();

    // rest、spread
    (function (a, b, ...rest) {
        console.log('es9-function-rest', a, b, rest, ...rest);
    })(1, 2, 3, 4, 5);
}, 600);
