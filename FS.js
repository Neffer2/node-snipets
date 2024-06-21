const fs = require('node:fs');

const stats = fs.statSync('file.txt');
console.log(
    stats.isFile(), // file
    stats.isDirectory(), // directory
    stats.isSymbolicLink(), // symlink
    stats.size // bytes
);

// Proceso sincrono
console.log("********** SYNC ******************");
console.log("** LEYENDO ARCHIVO 1 **");
const text = fs.readFileSync('file.txt', 'utf-8');
console.log(text);

console.log("** HACER COSAS MIENTRAS LEE **");

console.log("** LEYENDO ARCHIVO 2 **");
const text2 = fs.readFileSync('file2.txt', 'utf-8');
console.log(text2);


// Proceso asincrono con callback
console.log("********** ASYNC ******************");
fs.readFile('file.txt', 'utf-8', (err, text) => {
    if (err) throw err;
    console.log(text);
});

console.log("** HACER COSAS MIENTRAS LEE **");

fs.readFile('file2.txt', 'utf-8', (err, text) => {
    if (err) throw err;
    console.log(text);  
});
