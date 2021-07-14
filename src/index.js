import validator from "./validator.js";
const boton = document.getElementById("validar");
const backBoton = document.getElementById("anotherCard");
boton.addEventListener("click", function () {
    let numeroTarjeta = document.getElementById("cardNumber").value;
    if (numeroTarjeta==""){
        document.getElementById("conditional").style.display= "block"
        document.getElementById("emptyInput").innerHTML =
        "Usted no ha ingresado un número de tarjeta. Favor de ingresarlo."
    }else{
  //console.log(numeroTarjeta)
    const result = validator.isValid(numeroTarjeta);
    document.getElementById("firstPage").style.display = "none"
    document.getElementById("conditional").style.display= "none"
    document.getElementById("secondPage").style.display = "block"
    //envía los datos ingresados en carddNumber (cajita) a validator.js para ser ocupada en la función isValid
    //console.log (result)
    const hideNumber = validator.maskify(numeroTarjeta); //envía los datos ingresados en cardNumber(cajita) a markify.js para que sean modificados ####0000 y sean resibidos de regreso
    if (result == true) {
        document.getElementById("cardNumber").value = hideNumber;
        document.getElementById("finalResult").innerHTML =
        "El número de tarjeta ingresado es valida"
        document.getElementById("check").hidden=false
        document.getElementById("invalid").hidden=true
    } else {
        document.getElementById("cardNumber").value = hideNumber;
        document.getElementById("finalResult").innerHTML =
        "La tarjeta ingresada en inválida. Favor de ingresar otro número"
        document.getElementById("check").hidden=true
        document.getElementById("invalid").hidden=false
    }
}
});
backBoton.addEventListener("click", function () {
    document.getElementById("secondPage").style.display = "none";
    document.getElementById("firstPage").style.display = "block";
    document.getElementById("cardNumber").value = "";
});
/*function (showResult) {

            
}*/
