// Ejercicio: Practicar funciones

/* Crea una función llamada letterFinder que reciba dos parámetros: un string llamado word y un string llamado match. 
La función debe iterar a través de cada letra en word (usando un bucle for) y comparar cada letra con match. 
Si la letra actual es igual a match, la función debe imprimir:
 "Found the [match] at [index]" (donde [match] es la letra que estás buscando y [index] es la posición de la letra en word). 
 Si la letra no coincide, la función debe imprimir:
  "---No match found at [index]". */

function letterFinder(word, match){
    for (i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
             console.log('---No match found at', i)
    }
    }
}

letterFinder("test","t");