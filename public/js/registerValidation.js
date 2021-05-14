window.onload = function () {
    let register = document.querySelector(".create-form");

    register.name.addEventListener("blur", function (e) {
        if(register.name.value == ""){
            register.name.classList.add("is-invalid");
        }else{
            register.name.classList.add("is-valid");
            register.name.classList.remove('is-invalid');
        }

    });
    
    register.addEventListener("submit", function (e) {
        let errors = [];

        if (register.name.value == "") {
            errors.push("Debes ingresar tu nombre completo");
            register.name.classList.add("is-invalid");
        }else if(register.name.value.length <= 2){
            errors.push("Debes ingresar minimo 2 caracteres");
            register.name.classList.add("is-invalid");
        }else{
            register.name.classList.add("is-valid");
            register.name.classList.remove("is-invalid");
        }

        if (register.userName.value == "") {
            errors.push("Debes ingresar un nombre de usuario");
            register.userName.classList.add("is-invalid");
        }else if(register.userName.value.length <= 2){
            errors.push("Debes ingresar minimo 2 caracteres");
            register.userName.classList.add("is-invalid");
        }else{
            register.userName.classList.add("is-valid");
            register.userName.classList.remove("is-invalid");
            
        }
        
        if (register.email.value == "") {
            errors.push("Debes ingresar un correo electronico");
            register.email.classList.add("is-invalid");
        }else{
            register.email.classList.add("is-valid");
            register.email.classList.remove("is-invalid");
            
        }
        
        if(register.password.value ==  ""){
            errors.push("Debes ingresar una contraseña");
            register.password.classList.add("is-invalid");
        }else{
            register.password.classList.add("is-valid");
            register.password.classList.remove("is-invalid");
        }

        console.log(errors);

        if (errors.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector('.errores');
            ulErrors.classList.add("alert-warning");
            ulErrors.innerHTML = '';
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += `<li>${errors[i]}</li>` ;   
            }
        }else{
            alert('La validación fué exitosa');
        }

    })
}