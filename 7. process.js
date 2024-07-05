// Argumentos de entrada
console.log(process.argv);


// Controlar el proceso y su salida
// process.exit(1); // 0 = OK, 1 = ERROR

// Eventos del proceso
process.on('exit', (err) => {
    // Limpiar los recursos
});

// Current working directory (Desde donde se ejecuta, no en qué carpeta está)
console.log(process.cwd());

// Variables de entorno
console.log(process.env.PEPITO);
