/*
Los principios de la programación orientada a objetos (POO) son fundamentales para entender cómo estructurar y organizar el código de manera eficiente. 
Los cuatro principios principales son 4:

1. Encapsulamiento: Este principio se refiere a la agrupación de datos (atributos) y métodos (funciones) que operan sobre esos datos dentro de una misma unidad llamada clase.
El encapsulamiento ayuda a proteger el estado interno del objeto y a controlar el acceso a sus datos mediante modificadores de acceso (público, privado, protegido).

2. Abstracción: La abstracción consiste en simplificar la complejidad del sistema al ocultar los detalles innecesarios y mostrar solo las características esenciales de un objeto.
Esto permite a los desarrolladores centrarse en la interacción con los objetos sin preocuparse por su implementación interna.

3. Herencia: La herencia es un mecanismo que permite crear nuevas clases (clases derivadas o subclases) basadas en clases existentes (clases base o superclases).
La subclase hereda atributos y métodos de la superclase, lo que facilita la reutilización del código y la creación de jerarquías de clases.

4. Polimorfismo: El polimorfismo permite que una misma operación o método se comporte de diferentes maneras según el objeto que lo invoque.
Esto se logra mediante la sobrecarga de métodos (mismo nombre, diferentes parámetros) y la sobrescritura de métodos (subclase redefine un método de la superclase).
*/

// Ejemplo de Encapsulamiento, Abstracción, Herencia y Polimorfismo en JavaScript
// Herencia:
class Animal {
    constructor(nombre) {
        this.nombre = nombre; // Atributo
        this.tipo = "mamifero"; // Atributo
    }
    // Método
    hacerSonido() {
        console.log("El animal hace un sonido");
    }
}

class Perro extends Animal { // Herencia
    constructor(nombre, raza) {
        super(nombre); // Llamada al constructor de la clase base
        this.raza = raza; // Atributo adicional
    }
    // Sobrescritura de método (Polimorfismo)
    hacerSonido() {
        console.log("El perro ladra");
    }
}

const miPerro = new Perro("Firulais", "Labrador");
miPerro.hacerSonido(); // Output: El perro ladra
console.log(miPerro.nombre); // Output: Firulais
console.log(miPerro.tipo); // Output: mamifero
console.log(miPerro.raza); // Output: Labrador

// Encapsulamiento:
class CuentaBancaria {
    #saldo; // Atributo privado
    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }
    // Método público para depositar dinero
    depositar(cantidad) {
        if (cantidad > 0) {
            this.#saldo += cantidad;
            console.log(`Depósito exitoso: ${cantidad}`);
        } else {
            console.log("Cantidad inválida para depósito");
        }
    }
    // Método público para obtener el saldo
    obtenerSaldo() {
        return this.#saldo;
    }
}

const miCuenta = new CuentaBancaria(1000);
miCuenta.depositar(500);    // Output: Depósito exitoso: 500
console.log(miCuenta.obtenerSaldo()); // Output: 1500


// Abstracción:
class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    // Método para mostrar información del vehículo
    mostrarInfo() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}

const miVehiculo = new Vehiculo("Toyota", "Corolla");
miVehiculo.mostrarInfo(); // Output: Marca: Toyota, Modelo: Corolla

// Polimorfismo
class Gato extends Animal { // Herencia
    constructor(nombre, color) {
        super(nombre); // Llamada al constructor de la clase base
        this.color = color; // Atributo adicional
    }
    // Sobrescritura de método (Polimorfismo)
    hacerSonido() {
        console.log("El gato maúlla");
    }
}

const miGato = new Gato("Misu", "Blanco");
miGato.hacerSonido(); // Output: El gato maúlla
console.log(miGato.nombre); // Output: Misu
console.log(miGato.color); // Output: Blanco