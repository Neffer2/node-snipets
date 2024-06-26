const fs = require('node:fs');

// El error siempre es el primer parámetro que devuelve una función asíncrona
fs.readdir('.', (err, files) => {
    if (err) console.log(err);

    files.forEach(file => {
        console.log(file);
    });
});

// Lo mismo de arriba pero usando promesas
const fs_prom = require('node:fs/promises');

fs_prom.readdir('.')
    .then(files => {
        files.forEach(file => {
            console.log(file);
        });
    })
    .catch(err => console.log(err));
