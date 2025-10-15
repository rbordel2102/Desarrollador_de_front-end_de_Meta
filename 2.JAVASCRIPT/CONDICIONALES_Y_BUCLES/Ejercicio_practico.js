var edad = 70;

if (edad >= 65) {
    console.log("Obtienes tus ingresos de pensión");
} else if (edad < 65 && edad >= 18) {
    console.log("Cada mes recibes un salario");
} else if (edad < 18) {
    console.log("Recibe un subsidio");
} else {
    console.log("El valor de la variable edad no es numérico");
}

var day = "Friday";
switch (day) {
    case "Monday":
        console.log("Start of the work week");
        break;
    case "Tuesday":
        console.log("Second day of the work week");
        break;
    case "Wednesday":
        console.log("Midweek day");
        break; 
    case "Thursday":
        console.log("Almost the end of the work week");
        break;
    case "Friday":
        console.log("Last day of the work week");
        break;
    case "Saturday":
        console.log("First day of the weekend");
        break;
    case "Sunday":
        console.log("Last day of the weekend");
        break;
    default:
        console.log("Invalid day");
        break;
}