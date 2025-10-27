/* Tres métodos específicos que existen en los arrays:
- forEach
- filter
- map
*/

// Ejemplo de forEach
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(numero) {
    console.log(numero * 2);
});

// Ejemplo de filter
nums = [0,10,20,30,40,50];
const mayoresDe20 = nums.filter(function(num) {
    return num > 20;
});
console.log(mayoresDe20); // Muestra: [30, 40, 50]

// Ejemplo de map
const cuadrados = nums.map(function(num) {
    return num * num;
});
console.log(cuadrados); // Muestra: [0, 100, 400, 900, 1600, 2500]

