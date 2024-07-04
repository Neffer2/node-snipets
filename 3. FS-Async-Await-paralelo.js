const fs = require('node:fs/promises');

// Proceso asincrono con Async Await 
console.log("********** ASYNC ******************");

Promise.all([
    fs.readFile('file.txt', 'utf-8'),
    fs.readFile('file2.txt', 'utf-8')
]).then(([text1, text2]) => {
    console.log(text1);
    console.log(text2);
});

