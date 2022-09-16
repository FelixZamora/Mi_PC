'use strict';

const myArray1 = [2,4,6,8,true,3.56,'Maria',800,'2'];
let myArray2 = new Array('a','e','i','o','u');

console.log(myArray1[6]);
console.log(myArray1[3]);

for (let i of myArray1){
    //console.log(i);
}
for(let j in myArray1){
    //console.log(j);
    //console.log(myArray1[j]);
}
for (let k = 0; k < myArray1.length; k++){
    console.log(myArray1[k]);
}

myArray2.forEach(element => {
    console.log(e);
});