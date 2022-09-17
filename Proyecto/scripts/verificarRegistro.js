const form = document.getElementById('form');
const first = document.getElementById('first_name');
const last = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('pss');
const policy = document.getElementById('checkPolitica');

//Control de validacion

const objectValid = {
    nombres : false,
    apellidos : false,
    correo : false,
    clave : false,
    politica : false
};

//Validar el formulario completo

form.addEventListener('submit',(e) => {
    e.preventDefault();
    if(validForm() === -1){
        alert('Successful registration!');
    }
    else{
        alert('Error, check the form!');
    }
});

const validForm = () =>{
    const values = Object.values(objectValid);
    let response = values.findIndex(e => e === false);
    return response;
};

first.addEventListener('change',(e)=>{
    console.log(e.target);
    const firstRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    let valorFirst = e.target.value;
    objectValid.nombres = valorFirst.match(firstRegex) ? true : false;
    console.log(Object.values(objectValid));
});

last.addEventListener('change',(e)=>{
    console.log(e.target);
    const lastRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    let valorLast = e.target.value;
    objectValid.apellidos = valorLast.match(lastRegex) ? true : false;
    console.log(Object.values(objectValid));
});

email.addEventListener('change', function(e){

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    let valorEmail = e.target.value;
    objectValid.correo = valorEmail.match(emailRegex) ? true : false;
    console.log(Object.values(objectValid));

});

password.addEventListener('change', function(e){
    
    const passwordRegex = "^(?=.*[0-9])" + "(?=.*[a-z])(?=.*[A-Z])" + "(?=.*[@#$%+=])" + "(?=\\S+$).{8,20}$";
    let valorPassword = e.target.value;
    objectValid.clave = valorPassword.match(passwordRegex) ? true : false;
    console.log(Object.values(objectValid));

});

policy.addEventListener('change', function(e){
    objectValid.politica = e.target.checked === true ? true : false;
    console.log(Object.values(objectValid));
});