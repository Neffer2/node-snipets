const fs = require('node:fs/promises');

// Proceso asincrono con Async Await 
console.log("********** ASYNC ******************");


// IIFE (Immediately Invoked Function Expression)
(
    async () => {
        let text1 = await fs.readFile('file.txt', 'utf-8');
        console.log(text1);

        console.log("** HACER COSAS MIENTRAS LEE **");

        let text2 = await fs.readFile('file2.txt', 'utf-8');
        console.log(text2);
    }
)();
