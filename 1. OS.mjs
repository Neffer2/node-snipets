import { platform, release, arch, cpus, uptime } from 'node:os';


console.log("***** Information about the Operating System *****");
console.log("Sistema operativo:", platform());
console.log("Versión:", release());
console.log("Arquitectura:", arch());
console.log("Cantidad CPU'S:", cpus()); // Information about each logical CPU core IMPORTANT TO FUTURE SCALING PROCESS
console.log("Uptime:", uptime());

console.log("**************************************************");
