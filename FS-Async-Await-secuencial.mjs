import { readFile } from 'node:fs/promises';

// Proceso asincrono con Async Await - Asincrono secuencial
console.log("********** ASYNC ******************");

let text1 = await readFile('file.txt', 'utf-8');
console.log(text1);
console.log("** HACER COSAS MIENTRAS LEE **");
let text2 = await readFile('file2.txt', 'utf-8');
console.log(text2);
