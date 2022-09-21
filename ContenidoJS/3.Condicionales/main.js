'use strict';

let num3 = 55;
let num4 = 12;

if (num3 > num4){
    console.log("entré");
}
else{
    if (num3 % 5 === 0){
        console.log("multiplo de 5");
    }
}

//Condicional ternario

let respuesta = (num4 >= 100) ? "num4 es mayor que 10" : "no es mayor que 10";
console.log(respuesta);

//Switch

let opcion = 4;

switch (opcion){
    case 1:
        console.log("Opción 1");
        break;
    case 2:
        console.log("Opción 2");
        break;
    case 3:
        console.log("Opción 3");
        break;
    case 4:
        console.log("Opción 4");
        break;
    default:
        console.log("Opcion fuera de rango");

}

switch (true){
    case opcion >= 0 && opcion < 3:
        console.log("Esta aplazado");
        break;
    case opcion >= 3 && opcion <= 5:
        console.log("Esta aprobado");
        break;
    case opcion > 5:
        console.log("Opción fuera de rango");
        break;
}