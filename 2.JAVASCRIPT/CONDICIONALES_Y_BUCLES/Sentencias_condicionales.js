// Sentencias condicionales
// if, else
var result = 50;

if (result >= 40) {
    console.log("Aprobado");
} else {
    console.log("Cateado");
}

// if, else, else if
var place = "Primero";

if (place == "Primero") {
    console.log("Medalla de Oro");
} else if (place == "Segundo") {
    console.log("Medalla de Plata");
} else if (place == "Tercero") {
    console.log("Medalla de Bronce");
} else {
    console.log("Sin medalla");
}

// switch
var place = "Segundo";

switch (place) {
    case "Primero":
        console.log("Medalla de Oro");
        break;
    case "Segundo":
        console.log("Medalla de Plata");
        break;
    case "Tercero":
        console.log("Medalla de Bronce");
        break;
    default:
        console.log("Sin medalla");
        break;
}