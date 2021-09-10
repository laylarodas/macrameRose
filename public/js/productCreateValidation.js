window.onload = function () {
    let formProductCreate = document.querySelector(".form-productCreate");
    let name = document.querySelector(".name");
    let image = document.querySelector(".image");
    let description = document.querySelector(".description");
    let category = document.querySelector(".category");
    let color = document.querySelector(".color");
    let size = document.querySelector(".size");
    let price = document.querySelector(".price");
    let discount = document.querySelector(".discount");
    let stock = document.querySelector(".stock");

    name.focus();

    name.addEventListener('keyup',function(){    
        if (name.value.length > 4) {
            var errorDiv = document.querySelector(".nameErrorDiv")
            errorDiv.style.display = "none";
        }else{
            var errorDiv = document.querySelector(".nameErrorDiv")
            errorDiv.style.display = "block";
            errorDiv.innerHTML = "Tienes que escribir nombre del producto.Min 5 caracteres."
        }
    });

    name.addEventListener('focusout',function(){    
        if (name.value.length > 0) {
            var errorDiv = document.querySelector(".nameErrorDiv")
            errorDiv.style.display = "none";
        }else{
            var errorDiv = document.querySelector(".nameErrorDiv")
            errorDiv.style.display = "block";
            errorDiv.innerHTML = "No puede quedar vacio!!! Tienes que escribir nombre del producto."
        }
    });

    description.addEventListener('keyup',function(){    
        if (description.value.length > 19) {
            var errorDiv = document.querySelector(".descriptionErrorDiv")
            errorDiv.style.display = "none";
        }else{
            var errorDiv = document.querySelector(".descriptionErrorDiv")
            errorDiv.style.display = "block";
            errorDiv.innerHTML = "Tienes que escribir la descripción del producto.Min 20 caracteres."
        }
    });
    description.addEventListener('focusout',function(){    
        if (description.value.length > 0) {
            var errorDiv = document.querySelector(".descriptionErrorDiv")
            errorDiv.style.display = "none";
        }else{
            var errorDiv = document.querySelector(".descriptionErrorDiv")
            errorDiv.style.display = "block";
            errorDiv.innerHTML = "No puede quedar vacio!!! Tienes que escribir la descripción del producto."
        }
    });

    image.addEventListener('focusout',function(){  
        var fname = image.value;
        var re = /(\.jpg|\.jpeg|\.gif|\.png)$/i;
        if (!re.exec(fname) && image.value.length != 0) {
            var errorDiv = document.querySelector(".imageErrorDiv2")
            errorDiv.style.display = "block";
            errorDiv.innerHTML = "El formato de imagen no es válido!"
        }else{
            var errorDiv = document.querySelector(".imageErrorDiv2")
            errorDiv.style.display = "none";
        }
    })

    image.addEventListener('focusout',function(){  
        if (image.value.length != 0) {
        var errorDiv = document.querySelector(".imageErrorDiv")
        errorDiv.style.display = "none";
    }else{
        var errorDiv = document.querySelector(".imageErrorDiv")
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "No has seleccionado una imagen aún!"
    }});

    const priceValidation = /^[+]?([1-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
    const numberValidation = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;

    price.addEventListener("keyup", function () {
        if (priceValidation.test(price.value)) {
            var errorDiv = document.querySelector(".priceErrorDiv")
             errorDiv.style.display = "none";
        }else{
            var errorDiv = document.querySelector(".priceErrorDiv")
            errorDiv.style.display = "block";
            errorDiv.innerHTML = "Precio no valido."
            }
        }
    )

    price.addEventListener("focusout", function () {
        if (price.value.length > 0) {
            var errorDiv = document.querySelector(".priceErrorDiv")
            errorDiv.style.display = "none";
        }else{
            var errorDiv = document.querySelector(".priceErrorDiv")
            errorDiv.style.display = "block";
            errorDiv.innerHTML = "Debes ingresar el precio del producto."
        }
    })

    discount.addEventListener("keyup", function () {
        if (numberValidation.test(discount.value)) {
            var errorDiv = document.querySelector(".discountErrorDiv")
             errorDiv.style.display = "none";
        }else{
            var errorDiv = document.querySelector(".discountErrorDiv")
            errorDiv.style.display = "block";
            errorDiv.innerHTML = "Descuento no valido, si no tiene descuento ingresar 0."
            }
        }
    )

    discount.addEventListener("focusout", function () {
        if (discount.value.length > 0) {
            var errorDiv = document.querySelector(".discountErrorDiv")
            errorDiv.style.display = "none";
        }else{
            var errorDiv = document.querySelector(".discountErrorDiv")
            errorDiv.style.display = "block";
            errorDiv.innerHTML = "Debes ingresar el descuento del producto, si no tiene descuento ingresar 0."
        }
    })

    stock.addEventListener("focusout", function () {
        if (stock.value.length > 0) {
            var errorDiv = document.querySelector(".stockErrorDiv")
            errorDiv.style.display = "none";
        }else{
            var errorDiv = document.querySelector(".stockErrorDiv")
            errorDiv.style.display = "block";
            errorDiv.innerHTML = "Debes ingresar el stock del producto."
        }
    })

    formProductCreate.addEventListener("submit", e=>{
        e.preventDefault();
        if (
                    name.value.length > 0 &&
                    image.value.length > 0 &&
                    price.value.length > 0 &&
                    discount.value.length > 0 &&
                    stock.value.length > 0 &&
                    description.value.length > 19        
                    ){
                    var errorDiv = document.querySelector(".formErrorDiv")
                    errorDiv.style.display = "none";
                    formProductCreate.submit();
                }else{            
                    var errorDiv = document.querySelector(".formErrorDiv")
                    errorDiv.style.display = "block";
                    errorDiv.innerHTML = "Por favor, revise los campos!";
            }
        }
    
    )

}