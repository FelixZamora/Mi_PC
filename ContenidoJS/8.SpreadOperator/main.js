'use strict';
let e;
const myArray1 = [2,4,6,8,true,3.56,'Maria',800,'2'];
let myArray2 = new Array('a','e','i','o','u');

myArray1.push(300, 677);//Modificando

//let result = myArray1.concat(myArray2);
console.log(...myArray1,...myArray2,78,82772);

console.log(...myArray1);


for (let i of myArray1){
    //console.log(i);
}
myArray2.forEach(e => {
    //console.log(e);
});

function print (parm1,parm2 = 0,...parm3){
    console.log(`Esto es una impresion de parametros: ${parm1} ${parm2} ${parm3}`)
}

//print(myArray1);
print(...myArray1);