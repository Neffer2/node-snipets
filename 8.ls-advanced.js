const fs = require('node:fs');

// Trae el argumento que se le pasa al script dede la terminal
const folder = process.argv[2] ?? '.';

// El error siempre es el primer parámetro que devuelve una función asíncrona
fs.readdir(folder, (err, files) => {
    if (err) console.log(err);

    files.forEach(file => {
        console.log(file);
    });
});

// Lo mismo de arriba pero usando promesas
const fs_prom = require('node:fs/promises');

fs_prom.readdir(folder)
    .then(files => {
        files.forEach(file => {
            console.log(file);
        });
    })
    .catch(err => console.log(err));



// nullish coalescing operator, retorna el valor de la derecha si el de la izquierda es null o undefined
// let a = 15;
// const resultado = a ?? 'default';
// console.log(resultado);