const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('pss');

//Control validacion

const objectValid = {
    correo : false,
    clave : false
};

// Validar formulario

form.addEventListener('submit',(e) => {
    e.preventDefault();
    if(validForm() === -1){
        alert('Successful login!');
    }
    else{
        alert('Error, check your information!');
    }
});

const validForm = () =>{
    //Funcion que permite saber si los datos ingresados estan bien. Retorna booleano.
    const values = Object.values(objectValid);
    let response = values.findIndex(e => e === false);
    return response;
};

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

/** Validacion contrasena, debe cumplir los siguientes requisitos;

Contiene al menos 8 caracteres y un máximo de 20 caracteres.
Contiene al menos un dígito.
Contiene al menos un alfabeto en mayúsculas.
Contiene al menos un alfabeto en minúscula.
Contiene al menos un carácter especial que incluye ! @ # $% & *() - + = ^ .
No contiene ningún espacio en blanco. 

*/