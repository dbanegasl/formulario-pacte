const formRegister = document.querySelector(".form-register");
const inputUser = document.querySelector(".form-register input[type='text']");
const inputEmail = document.querySelector(".form-register input[type='email']");
const inputPass = document.querySelector(".form-register input[type='Password']");
const alertaError = document.querySelector(".alerta-error")
const alertaExito = document.querySelector(".alerta-exito")


const userNameRegex = /^[a-zA-Z0-9\_\-]{4,16}$/;
export const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
export const passwordRegex = /^.{4,12}$/;

export const estadoValidacionCampos ={
    userName: false,
    userEmail: false,
    userPassword: false,
};


document.addEventListener("DOMContentLoaded", () =>{
   formRegister.addEventListener ("submit" , e => {
    //e.preventDefault();
    enviarFormulario(formRegister, alertaError,alertaExito,e)
   }) 
    inputUser. addEventListener("input", () =>{
        validarCampo(userNameRegex, inputUser, "El usuario tiene que ser de 4 a 16 digitos y solo puede contener ,letras y guion bajo.")
   })
    inputEmail. addEventListener("input", () =>{
        validarCampo(emailRegex, inputEmail, "El correo solo puede contener letras, numeros, puntos y guion bajo")
   })
    inputPass. addEventListener("input", () =>{
        validarCampo(passwordRegex,inputPass, "La contraseña tiene que ser de 4 a 12 digitos")
   })

})

export function validarCampo(regularExpresion, campo,mensaje ){
    const validarCampo =regularExpresion.test(campo.value);
    if(validarCampo){
        eliminarAlerta(campo.parentElement.parentElement )
        estadoValidacionCampos[campo.name] = true;
        campo.parentElement.classList.remove("error");
        return;
    }
    estadoValidacionCampos[campo.name] = false;
    mostrarAlerta(campo.parentElement.parentElement, mensaje)
    campo.parentElement.classList.add("error");
    }

function mostrarAlerta(referencia, mensaje){
    eliminarAlerta(referencia)
    const alertaDiv = document.createElement("div");
    alertaDiv.classList.add("alerta")
    alertaDiv.textContent = mensaje;
    referencia.appendChild(alertaDiv)


}
function eliminarAlerta(referencia){
    const alerta = referencia.querySelector(".alerta");
    console.log(alerta)
    if(alerta){
        alerta.remove();
    }
}

 export function enviarFormulario(form,alertaError,alertaExito,e){
    //VALIDAMOS EL ENVIO DEL FORMULARIO
    if(estadoValidacionCampos.userName && estadoValidacionCampos.userEmail && estadoValidacionCampos.userPassword){
        alertaExito.classList.add("alertaExito");
        alertaError.classList.remove("alertaError");

        //form.reset();
        alertaExito.classList.add("alertaExito");
        alertaError.classList.remove("alertaError");
        setTimeout(() =>{
            alertaExito.classList.remove("alertaExito");
        }, 3000);
        return;
    }
    e.preventDefault();
    alertaExito.classList.remove("alertaExito");
    alertaError.classList.add("alertaError");
    setTimeout(() =>{
        alertaError.classList.remove("alertaError");
    }, 3000);

}