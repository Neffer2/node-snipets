const fs = require('node:fs/promises');

// Proceso asincrono con promesas
console.log("********** ASYNC ******************");
fs.readFile('file.txt', 'utf-8')
.then((text) => {
    console.log(text);
});

console.log("** HACER COSAS MIENTRAS LEE **");

fs.readFile('file2.txt', 'utf-8')
.then((text) => {
    console.log(text);
});
