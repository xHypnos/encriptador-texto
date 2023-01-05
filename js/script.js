//Variable con las letras del abecedario para ser verificadas
var letras = " abcdefghijklmnñopqrstuvwxyz";

//Funcion que revisa una cadena de caracteres para verificar si solo contiene letras minusculas 
function verificarTexto(texto){
    let letrasCorrectas = 0;
    for(let i=0; i<texto.length; i++){
        for(let n=0; n<letras.length; n++){
            if(texto[i] == letras[n]){
                letrasCorrectas++;
                break;
            }
        }
    }
    if (letrasCorrectas == texto.length){
        return true;
    }else{
        return false;
    }
}

//Funcion para encriptar texto de un textarea
function encriptar(){
    var texto = document.getElementById("area-texto").value;
    let numLetra = texto.length;
    let mensajeEncriptado = "";
    if (verificarTexto(texto)){
        if (texto == mensajeEncriptado){
            alert("¡Por favor, ingrese un texto para encriptar!")
        }
        else if (texto != mensajeEncriptado){
            for(let i=0; i<numLetra; i++){
                if(texto[i]==="e"){
                    mensajeEncriptado = mensajeEncriptado+"enter";
                }
                else if(texto[i]==="i"){
                    mensajeEncriptado = mensajeEncriptado+"imes";   
                }
                else if(texto[i]==="a"){
                    mensajeEncriptado = mensajeEncriptado+"ai";   
                }
                else if(texto[i]==="o"){
                    mensajeEncriptado = mensajeEncriptado+"ober";   
                }
                else if(texto[i]==="u"){
                    mensajeEncriptado = mensajeEncriptado+"ufat";   
                }
                else{
                    mensajeEncriptado = mensajeEncriptado+ texto[i];
                }
            }
            document.getElementById("info-salida").style.display = "none";
            document.getElementById("info-encriptada").style.display = "block";
            document.getElementById("area-encriptada").value = mensajeEncriptado;
        }
    }
    else{
        alert("¡Por favor ingrese solamente letras en minuscula y sin acento!");
    } 
}

//Funcion para desencriptar texto
function desencriptar(){
    var texto = document.getElementById("area-texto").value;
    let numLetra = texto.length;
    let mensajeDesencriptado = "";
    if(verificarTexto(texto)){
        if (texto == mensajeDesencriptado){
            alert("¡Por favor, ingrese un texto para Desencriptar!")
        }
        else if (texto != mensajeDesencriptado){
            for(let i=0; i<numLetra; i++){
                if(texto[i]==="e"){
                    mensajeDesencriptado = mensajeDesencriptado+"e";
                    i+=4;
                }
                else if(texto[i]==="i"){
                    mensajeDesencriptado = mensajeDesencriptado+"i";
                    i+=3;   
                }
                else if(texto[i]==="a"){
                    mensajeDesencriptado = mensajeDesencriptado+"a"; 
                    i+=1;  
                }
                else if(texto[i]==="o"){
                    mensajeDesencriptado = mensajeDesencriptado+"o";
                    i+=3;   
                }
                else if(texto[i]==="u"){
                    mensajeDesencriptado = mensajeDesencriptado+"u";
                    i+=3;   
                }
                else{
                    mensajeDesencriptado = mensajeDesencriptado+ texto[i];
                }
            }
            document.getElementById("info-salida").style.display = "none";
            document.getElementById("info-encriptada").style.display = "block";
            document.getElementById("area-encriptada").value = mensajeDesencriptado;    
        } 
    }
    else{
        alert("¡Por favor ingrese solamente letras en minuscula y sin acento!");
    } 
}


//Funcion para copiar el texto encriptado o desencriptado
function copy(){
    let copyText = document.querySelector("#area-encriptada");
    copyText.select();
    document.execCommand("copy");
    alert("¡Texto copiado!")
}