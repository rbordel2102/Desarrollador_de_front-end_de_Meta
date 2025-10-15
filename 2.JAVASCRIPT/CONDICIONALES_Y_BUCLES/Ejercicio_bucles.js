// Ejercicio 1: Utiliza un bucle para imprimir los números del 1 al 5 en la consola. Después del bucle, imprime "Counting completed!".

/* console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!') */


for (var i = 1; i <= 5; i++) {
    console.log(i)
}
console.log('Counting completed!');

// Ejercicio 2: Utiliza un bucle para imprimir los números del 5 al 1 en la consola. Después del bucle, imprime "Countdown finished!".

/* console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!') */


for (var i = 5; i >= 1; i--) {
    console.log(i);
}
console.log('Countdown finished!')
// Usando un bucle while, imprime los números del 1 al 5 en la consola. Después del bucle, imprime "Counting completed!".

/* console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!') */

var count = 1;
while (count <= 5) {
    console.log(count);
    count++;
}
console.log('Counting completed!');

// Usando un bucle while, imprime los números del 5 al 1 en la consola. Después del bucle, imprime "Countdown finished!".

/* console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!') */  

var count = 5;
while (count >= 1) {
    console.log(count);
    count--;
}
console.log('Countdown finished!');

// Ejercicio 5: Escriba un bucle "while" que realice exactamente el mismo código repetitivo que éste

/* console.log(2018)
console.log(2019)
console.log(2020)
console.log(2021)
console.log(2022) */

var year = 2018;
while (year <= 2022) {
    console.log(year);
    year++;
}

// Ejercicio 6: Bucle anidado
// Escriba un bucle "for" anidado para imprimir la tabla de multiplicar del 0 al 10.

// console.log("La tabla del 0 por 1 es igual a 0") ...

for (i= 0; i <= 10; i++) {
    for (j = 1; j <=10; j++) {
        console.log("La tabla del",i, "por",j, "es igual a", i*j);
    }
}

// Ejercicio 7: Dado el siguiente array, utiliza un bucle para imprimir cada elemento en la consola.

var cubes = 'ABCDEFG';
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

var cubes = 'ABCDEFG';
for (var i = 0; i < 7; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

// Ejercicio 8: hacer un bucle sobre los títulos de las entradas de un blog en algunos datos estructurados, y mostrar cada título de entrada de blog en la página de inicio de un blog

var blogEntries = [
    { title: "Understanding JavaScript Closures", author: "Jane Doe", date: "2023-01-15" },
    { title: "A Guide to Responsive Web Design", author: "John Smith", date: "2023-02-10" },
    { title: "CSS Grid vs. Flexbox: When to Use Which", author: "Alice Johnson", date: "2023-03-05" },
    { title: "10 Tips for Writing Clean Code", author: "Bob Brown", date: "2023-04-20" }
];

for (var i = 0; i < blogEntries.length; i++) {
    console.log(blogEntries[i].title);
}
