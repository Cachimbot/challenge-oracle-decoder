function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("imagenPersona").style.display = "none";
    document.getElementById("mensajeInfo").style.display = "none";
    document.getElementById("mensajeResultado").innerHTML = txtCifrado;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
    document.getElementById("mensajeResultado").style.height = "425px";
    document.getElementById("mensajeResultado").style.fontSize = "23px";
    document.getElementById("mensajeResultado").setAttribute("readonly","readonly");
}

function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("imagenPersona").style.display = "none";
    document.getElementById("mensajeInfo").style.display = "none";
    document.getElementById("mensajeResultado").innerHTML = txtCifrado;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
    document.getElementById("mensajeResultado").style.height = "425px";
    document.getElementById("mensajeResultado").style.fontSize = "23px";
    document.getElementById("mensajeResultado").setAttribute("readonly","readonly");
}

function copy(){
    var contenido = document.querySelector("#mensajeResultado");
    contenido.select();
    document.execCommand("copy");
    alert("¡ Se realizo el copiado del Texto !");
}