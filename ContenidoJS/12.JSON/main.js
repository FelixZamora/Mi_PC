'use strict'
let cadJSON = {"nombres":"Juan Andres"};
// []->arreglo, {} -> objeto
let datos = [
    {
    "nombres" : "Juan Andres",
    "apellidos" : "Vargas Solano",
    "edad" : 34,
    "materias" : ["logica", "programacion", "matematicas"],
    "soltero" : true
    },
    {
        "nombres" : "Juan Andres",
        "apellidos" : "Vargas Solano",
        "edad" : 34,
        "materias" : ["logica", "programacion", "matematicas"],
        "soltero" : true
    }
];

Object.entries(datos).forEach((e) => console.log(e));