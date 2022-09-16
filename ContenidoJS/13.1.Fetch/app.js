import { DataApi } from "./data.js";

// Instanciar el objeto

let myData = new DataApi();
const allData = myData.getData();
console.log(allData);
console.log(myData.getInfoCompleta());
//console.log(myData.url);
//console.log(myData.infoCompleta);
