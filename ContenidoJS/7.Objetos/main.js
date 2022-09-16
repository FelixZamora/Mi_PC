'use strict'

/* Programación orientada a objetos 

Objetos: 
1)Estados 
2)Propiedades/caracteristicas/Atributos 
3)Comportamiento/Metodos

Se basa en el concepto de clases y objetos. Este tipo de programación se utiliza para estructurar un programa de software en piezas simples y reutilizables de planos de código (clases) para crear instancias individuales de objetos. 

Instancia de una clase

clase: Instancia - atributos - metodos

A traves del punto

1. Polimorfismo => Muchas formas de implementación.
2. Herencia => Familia.
3. Encapsulación => Proteger intersección => Modificadores de acceso => Public, Private, Protected.
4. Abstracción (UML) => Clases o objetos

NOMBRE DE LA CLASE PRIMERA EN MAYUSCULA

class Medicina {
    nombre;
    presentación;
    dosis;

    tomar();
}

Instanciar el objeto (Crear)

Crear

let miMedicina = new Medicina;
let nombredelobjeto = new Medicina;

miMedicina.nombre = "Acetaminación";
miMedicina.presentacion = "Pastilla";
miMedicina.dosis = "1 c/a 8 h";
miMedicina.tomar();


*/

let myObject = {
    nombre : 'Felix',
    apellidos : 'Ruiz',
    edad : 18,
    genero: 'masculino'
}
//console.log(myObject.apellidos);
myObject.apellidos = "Sosa";
//console.log(myObject);

//Iterar objecto

//Object.entries(myObject).forEach((e) => console.log(e));
//Object.entries(myObject).forEach(([key,value]) => console.log(key,value));
Object.values(myObject).forEach((key) => console.log(key));