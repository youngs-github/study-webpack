// es8
setTimeout(function () {
    // async + await
    (async function () {
        const timeStart = Date.now();
        await new Promise((r) => setTimeout(r, 50));
        console.log('es8-promise-async/await', Date.now() - timeStart);
    })();

    // object
    (function () {
        console.log('es8-object-entries', Object.entries({ a: 1, b: 2 }));
        console.log('es8-object-values', Object.values({ a: 1, b: 2 }));
    })();

    // string
    (function (str = 'abc') {
        console.log('es8-string-padStart', str.padStart(10, '_'));
        console.log('es8-string-padEnd', str.padEnd(10, '_'));
    })();
}, 400);
