//FORMULARIO PARA HACER EL REGISTRO

form.addEventListener('submit', function LocalStorage() {

    //captura de datos y almacenamiento en variables
    let nombre = document.querySelector('#inputNombre').value;
    let apellido = document.querySelector('#inputApellido').value;
    let direccion = document.querySelector('#inputAdrss').value
    let telefono = document.querySelector('#inputPhone').value;
    let mensaje = document.querySelector('#msj').value;

        //Validación de campos vacíos
    if (nombre == "" || apellido == "" || direccion == "") {
        alert('Rellenar todos los campos');
        return true;
    }
    //Validacion de numero de telefono
    else if (telefono == "" || isNaN(telefono)) {
        alert('Ingresar un valor numerico');
        return true;
    }
    else {
    //Validacion para el nombre y el apellido si se introducen caracteres que no sean alfabeticos
        if (isNaN(nombre) || isNaN(apellido)) {

            localStorage.setItem("Nombre", nombre);
            localStorage.setItem("Apellido", apellido);
            localStorage.setItem("Direccion", direccion);
            localStorage.setItem("Telefono", telefono);
            localStorage.setItem("Comentarios", mensaje);

            alert("La informacion ha sido almacenada de forma corecta en el Almacenamiento Local");
        }
        return false;
    }

})
