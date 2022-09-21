'use strict';
//Seleccionar elementos del dom
let myTitle = document.getElementById("titulo");
console.log(myTitle);
//Seleccionar por el name
let tagName = document.getElementsByName("art1");
console.log(tagName);
//Seleccionar por etiqueta
let etiqueta = document.getElementsByTagName("h3");
console.log(etiqueta);
// Query Selector
let queryTitulo = document.querySelector("#container");
console.log(queryTitulo);
// QuerySelector class 
let myMenu = document.querySelector(".menu");
console.log(myMenu);
// QuerySelector etiqueta 
let myOl = document.querySelector("ol");
console.log(myOl);
// QuerySelector etiqueta 
let allArt = document.querySelectorAll("article");
console.log(allArt);
//Crear elementos
let miParrafo = document.createElement("p");
miParrafo.id = "parrafo";
miParrafo.className = "parrafo";
miParrafo.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non numquam quidem obcaecati ullam quam perferendis ipsa, necessitatibus, vero dolores modi ipsum cumque sunt ex? Laboriosam molestiae molestias quibusdam neque quisquam.";
miParrafo.innerHTML = "<h3>Lorem ipsum dolor sit amet</h3> consectetur adipisicing elit. Non numquam quidem obcaecati ullam quam perferendis ipsa, necessitatibus, vero dolores modi ipsum cumque sunt ex? Laboriosam molestiae molestias quibusdam neque quisquam.";
//Insertar elemento en el DOM
document.body.appendChild(miParrafo);
//Seleccion elemento
let seccion1 = document.getElementById("section1");
seccion1.appendChild(miParrafo);
