// Operador Rest

const [first, ...rest] = [10, 20, 30, 40, 50];
console.log(first);
console.log(rest);

function sum (...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Muestra: 15

// Operador Spread
const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate
console.log(fruitsAndBerries); // Muestra: ['apple', 'pear', 'plum', 'blueberry', 'strawberry']

// Método para añadir mienbros a un array sin usar el método push()
let moreFruits = ['banana', 'kiwi'];
moreFruits = [...moreFruits, 'mango', 'mandarina']; // Incorrecto
console.log(moreFruits); // Muestra: ['banana', 'kiwi', 'mango', 'mandarina']

// Convertir una cadena en una matriz utilizando el operador spread
const greeting = "Hello";
const chars = [...greeting];
console.log(chars); // Muestra: ['H', 'e', 'l', 'l', 'o']

// Copiar un objeto o un array en otro distinto
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1};
car1.speed = 201;
console.log(car1.speed, car2.speed); // Muestra: 201 200

// Puedes copiar un array en un array completamente separado, también usando el operador spread, así:
const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, "not", fruits2); // Muestra: ['apples'] not ['apples', 'pears']