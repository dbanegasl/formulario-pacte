import { validarCampo, emailRegex, passwordRegex, estadoValidacionCampos, enviarFormulario} from "./register.js";
const formlogin = document.querySelector(".form-login");
const inputEmail = document.querySelector(".form-login input[type='email']");
const inputPass = document.querySelector(".form-login input[type='Password']");
const alertaErrorlogin = document.querySelector(".form-login .alerta-error")
const alertaExitologin = document.querySelector(".form-login .alerta-exito")

document.addEventListener("DOMContentLoaded", () =>{
    formlogin.addEventListener ("submit" , e => {
        estadoValidacionCampos.userName = true;
     e.preventDefault();
     enviarFormulario(formlogin,alertaErrorlogin,alertaExitologin)
    }) 
     
     inputEmail. addEventListener("input", () =>{
         validarCampo(emailRegex, inputEmail, "El correo solo puede contener letras,numeros, puntos y guion bajo")
    })
     inputPass. addEventListener("input", () =>{
         validarCampo(passwordRegex,inputPass, "La contraseña tiene que ser de 4 a 12 digitos")
    })
 
 })