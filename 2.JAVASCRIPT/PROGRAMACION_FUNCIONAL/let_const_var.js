/*
Utililo let cuando la variable va a cambiar de valor y const cuando no va a cambiar y utilizo var en caso de que necesite que la variable tenga un scope global o de funcion.
*/

// Ejemplo con let
let mensaje = "Hola, mundo!";
mensaje = "Hola, universo!";
console.log(mensaje); // Output: Hola, universo!

// Ejemplo con const
const PI = 3.14159;
console.log(PI); // Output: 3.14159

// Ejemplo con var
function ejemploVar() {
    var saludo = "Hola desde var!";
    if (true) {
        var saludo = "Hola desde el bloque if!";
        console.log(saludo); // Output: Hola desde el bloque if!
    }
    console.log(saludo); // Output: Hola desde el bloque if!
}
ejemploVar();