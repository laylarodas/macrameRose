window.onload = function () {
    let formLogin = document.querySelector(".design-form");
    let email = document.querySelector(".email");
    let password = document.querySelector(".password");


    //email.focus();
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    
    email.addEventListener('focusin',function(){   
        if (re.test(email.value)) {
            var errorDiv = document.querySelector(".emailErrorDiv")
            errorDiv.style.display = "none"
        }else{
            var errorDiv = document.querySelector(".emailErrorDiv")
            errorDiv.style.display = "block";
            errorDiv.innerHTML = "Debes escribir un correo electronico."
        }
    });

    email.addEventListener('focusout',function(){   
        if (re.test(email.value)) {
            var errorDiv = document.querySelector(".emailErrorDiv")
            errorDiv.style.display = "none"
        }else{
            var errorDiv = document.querySelector(".emailErrorDiv")
            errorDiv.style.display = "block";
            errorDiv.innerHTML = "Debes escribir un formato de correo electronico válido."
        }
    });

    password.addEventListener('focusin',function(){               
        if (password.value.length > 0) {
            var errorDiv = document.querySelector(".passwordErrorDiv")
            errorDiv.style.display = "none";
        }else{
            var errorDiv = document.querySelector(".passwordErrorDiv")
            errorDiv.style.display = "block";
            errorDiv.innerHTML = "Ingrese contraseña. Min 8 caracteres"}
    })
    

    const passwordVerify = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,30}$/;

    password.addEventListener('keyup',function(){   
        if (passwordVerify.test(password.value)) {
        var errorDiv = document.querySelector(".passwordErrorDiv")
        errorDiv.style.display = "none";
    }else{
        var errorDiv = document.querySelector(".passwordErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "Debe tener al menos 1 mayúscula,1 minuscula,1 caracter especial y 1 número."
    }});

    formLogin.addEventListener("submit", e=> {
        e.preventDefault();
                if (
                re.test(email.value) &&
                passwordVerify.test(password.value)  
                ){
                var errorDiv = document.querySelector(".formErrorDiv")
                errorDiv.style.display = "none";
                formLogin.submit();
            }else{            
                var errorDiv = document.querySelector(".formErrorDiv")
                errorDiv.style.display = "block";
                errorDiv.innerHTML = "Por favor, revise los campos!";
        }
    })
}