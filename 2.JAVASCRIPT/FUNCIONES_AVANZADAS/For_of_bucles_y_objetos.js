// Ejemplo de bucle for...of
const frutas = ["manzana", "banana", "cereza"];

for (const fruta of frutas) {
    console.log(fruta);
}

// Ejemplo de bucle for...in
const persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Barcelona"
};
for (const clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}

// Métodos: Object.keys(), Object.values(), y Object.entries().
// Ejemplo de Object.keys()
const persona2 = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};
const claves = Object.keys(persona2);
console.log(claves); // Muestra: ["nombre", "edad", "ciudad"]

// Ejemplo de Object.values()
const valores = Object.values(persona);
console.log(valores); // Muestra: ["Juan", 30, "Madrid"]

// Ejemplo de Object.entries()
const entradas = Object.entries(persona);
console.log(entradas); // Muestra: [["nombre", "Juan"], ["edad", 30], ["ciudad", "Madrid"]]

// Ejemplo:
const car = {
    engine: true,
    steering: true,
    speed: "slow"
}

const sportsCar = Object.create(car);
sportsCar.speed = "fast";

for (prop in sportsCar) {
    console.log(prop+": "+sportsCar[prop]);
}