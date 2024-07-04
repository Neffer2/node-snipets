const path = require('node:path');

// Útil para unir rutas de archivos en diferentes sistemas operativos
const path1 = path.join('folder', 'subfolder', 'file.txt');
console.log("Path: ", path1);

// Útil para obtener el nombre del archivo con o sin extensión
// const basename = path.basename('folder/subfolder/file.txt');
const basename = path.basename('folder/subfolder/file.txt', '.txt');
console.log("Name: ", basename);

// Útil para obtener la extensión de un archivo
const extension = path.extname('image.png');  
console.log("Extension: ", extension);
