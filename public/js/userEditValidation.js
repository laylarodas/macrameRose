window.onload = function () {
    let formUserEdit = document.querySelector(".create-form");
    let name = document.querySelector(".name");
    let userName = document.querySelector(".userName");
    let email = document.querySelector(".email");
    let avatar = document.querySelector(".avatar");
    let password = document.querySelector(".password");
    

    name.focus();

    name.addEventListener('keyup',function(){    
        if (name.value.length > 1) {
            var errorDiv = document.querySelector(".nameErrorDiv")
            errorDiv.style.display = "none";
        }else{
            var errorDiv = document.querySelector(".nameErrorDiv")
            errorDiv.style.display = "block";
            errorDiv.innerHTML = "Tienes que escribir un nombre completo.Min 2 caracteres."
        }
    });
    userName.addEventListener('keyup',function(){    
        if (userName.value.length > 1) {
            var errorDiv = document.querySelector(".userNameErrorDiv")
            errorDiv.style.display = "none";
        }else{
            var errorDiv = document.querySelector(".userNameErrorDiv")
            errorDiv.style.display = "block";
            errorDiv.innerHTML = "Tienes que escribir un nombre de usuario.Min 2 caracteres."
        }
    });

    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 

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


    avatar.addEventListener('focusout',function(){  
        var fname = avatar.value;
        var re = /(\.jpg|\.jpeg|\.gif|\.png)$/i;
        if (!re.exec(fname) && avatar.value.length != 0) {
            var errorDiv = document.querySelector(".avatarErrorDiv2")
            errorDiv.style.display = "block";
            errorDiv.innerHTML = "El formato de imagen no es válido!"
        }else{
            var errorDiv = document.querySelector(".avatarErrorDiv2")
            errorDiv.style.display = "none";
        }
    })

    avatar.addEventListener('focusout',function(){  
        if (avatar.value.length != 0) {
        var errorDiv = document.querySelector(".avatarErrorDiv")
        errorDiv.style.display = "none";
    }else{
        var errorDiv = document.querySelector(".avatarErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "No has seleccionado una imagen aún!"
    }});

    
    password.addEventListener('focusin',function(){               
        if (password.value.length > 0) {
            var errorDiv = document.querySelector(".passwordErrorDiv")
            errorDiv.style.display = "none";
        }else{
            var errorDiv = document.querySelector(".passwordErrorDiv")
            errorDiv.style.display = "block";
            errorDiv.innerHTML = "No puedo estar vacio. Min 8 caracteres"}
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

    formUserEdit.addEventListener("submit", e=> {
        e.preventDefault();
                if (
                name.value.length > 0 &&
                userName.value.length > 0 &&
                re.test(email.value) &&
                avatar.value.length > 0 &&
                passwordVerify.test(password.value)  
                ){
                var errorDiv = document.querySelector(".formErrorDiv")
                errorDiv.style.display = "none";
                formUserEdit.submit();
            }else{            
                var errorDiv = document.querySelector(".formErrorDiv")
                errorDiv.style.display = "block";
                errorDiv.innerHTML = "Por favor, revise los campos!";
        }
    })
}