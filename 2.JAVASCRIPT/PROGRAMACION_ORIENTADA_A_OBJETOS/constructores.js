/*
new Date();
new Error();
new Map();
new Promise();
new Set();
new WeakSet();
new WeakMap();
*/

// Constructor function new Date()
const fecha = new Date();
console.log(fecha); // Muestra la fecha y hora actual

// Constructor function new Error()
const error = new Error("Este es un mensaje de error");
console.log(error.message); // Muestra: Este es un mensaje de error

// Constructor function new Map()
const mapa = new Map();
mapa.set("clave1", "valor1");
mapa.set("clave2", "valor2");
console.log(mapa.get("clave1")); // Muestra: valor1

// Constructor function new Promise()
const promesa = new Promise((resolve, reject) => {
    const exito = true;
    if (exito) {
        resolve("La promesa se resolvió con éxito");
    } else {
        reject("La promesa fue rechazada");
    }
});

promesa.then((mensaje) => {
    console.log(mensaje); // Muestra: La promesa se resolvió con éxito
}).catch((mensaje) => {
    console.log(mensaje);
});

// Constructor function new Set(): estructura de datos que permite almacenar valores únicos de cualquier tipo.
const conjunto = new Set();
conjunto.add(1);
conjunto.add(2);
conjunto.add(2); // No se añadirá porque 2 ya existe en el Set

// Constructor function new WeakSet()
const weakSet = new WeakSet();
let obj1 = { nombre: "objeto1" };
let obj2 = { nombre: "objeto2" };
weakSet.add(obj1);
weakSet.add(obj2);
console.log(weakSet.has(obj1));

// Constructor function new WeakMap()
const weakMap = new WeakMap();
let llave1 = { id: 1 };
let llave2 = { id: 2 };
weakMap.set(llave1, "valor1");
weakMap.set(llave2, "valor2");
console.log(weakMap.get(llave1));