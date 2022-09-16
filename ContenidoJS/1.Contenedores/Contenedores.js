'use strict'; 

/**
 * Contenedores
 */

/**var var1 = 23; //ambito global
let var2 = 1; //ambito local
const IVA_1 = 19; // Constante
var var1 = "Hola mundo";
//let var2 = 23;
console.log(var1);

if (true){
    var var1 = false; 
}

console.log(var1);*/

let numero1;
let numero2;
let suma;
suma = 0;

numero1 = parseFloat(prompt("Introduzca un numero: "));//Cambiar la cadena a numero
numero2 = prompt("Introduzca un numero: ");
suma = numero1 + parseFloat(numero2);
console.info("La suma es: " + suma);
alert ("La suma es: " + suma);