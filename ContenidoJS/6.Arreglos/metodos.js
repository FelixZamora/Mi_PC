'use strict';
let cadena = "enero-febreo-marzo-abril-mayo-junio-julio";
const myArray1 = [2,4,6,8,true,3.56,'Maria',800,'2'];

//método split
let resultArray = cadena.split('-');
console.log(resultArray);

//método find 
let result = myArray1.find((e) => e === 4);
console.log(result);

//método findIndex
result = myArray1.findIndex((e) => e === 'Maria');
console.log(result);

//Método filter
result = myArray1.filter((e)=> e % 2 === 0 );
console.log(result);
