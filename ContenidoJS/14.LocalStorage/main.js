//capturar botones
const btnRojo = document.getElementById('rojo');
const btnMarron = document.getElementById('marron');
const btnAzul = document.getElementById('azul');
const btnBorrar = document.getElementById('borrar');
const fondo = localStorage.getItem('fondo');

//  Generar los eventos a los botones

btnRojo.addEventListener('click', () => {
    let colorRojo = "#FF0004";
    localStorage.setItem ('fondo', 'colorRojo');
    document.body.style.backgroundColor = colorRojo;
});
btnMarron.addEventListener('click', () => {
    let colorMarron = "#873e23";
    localStorage.setItem ('fondo', 'colorMarron');
    document.body.style.backgroundColor = colorMarron;
});
btnAzul.addEventListener('click', () => {
    let colorAzul = "#0D88EC";
    localStorage.setItem ('fondo', 'colorAzul');
    document.body.style.backgroundColor = colorAzul;
});
btnBorrar.addEventListener('click', () => {
    localStorage.removeItem('fondo');
    document.body.style = "none";
});