const form = document.getElementById('form');
const btn = document.getElementById('btnDatos');
const names = document.getElementById('inputNames');
const age = document.getElementById('inputAge');
const email = document.getElementById('inputEmail');
const city = document.getElementById('inputCity');
const policy = document.getElementById('checkPolitica');

//Control de validación

const objectValid = {
    nombres : false,
    edad : false,
    correo : false,
    ciudad : false,
    politica : false
};

//Validar el formulario completo

form.addEventListener('submit',() => {
    e.preventDefault();
    if(validForm() === -1){
        alert('Enviando formulario');
    }
    else{
        alert('Error en valores de formulario');
    }
});

const validForm = () =>{
    const values = Object.values(objectValid);
    let response = values.findIndex(e => e === false);
    return response;
};

names.addEventListener('change',(e/**Evento*/)=>{
    console.log(e.target);
    const namesRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    let valorNames = e.target.value;
    objectValid.nombres = valorNames.match(namesRegex) ? true : false;
    console.log(Object.values(objectValid));
});

age.addEventListener('change', function(e){
    const ageRegex = /(^[0-9]{1,2}$)/g;
    if ((age.value.match(ageRegex) && (parseInt(age.value)) >= 18)){
        objectValid.edad = true;
    }
    else{
        objectValid.edad = false;
    }
    console.log(Object.values(objectValid));
});

email.addEventListener('change', function(e){
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let valorEmail = e.target.value;
    objectValid.correo = valorEmail.match(emailRegex) ? true : false;
    console.log(Object.values(objectValid));

});

city.addEventListener('change', function(){
    
    if(selectPrincipal.value == 'si') {
        selectSecundario.disabled = false;
        selectSecundario.required = true;
    } 
    else {
        selectSecundario.disabled = true;
        selectSecundario.required = false;
    }
});

policy.addEventListener('change', function(e){
    objectValid.politica = e.target.checked === true ? true : false;
    console.log(Object.values(objectValid));
});