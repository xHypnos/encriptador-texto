//Funcion para cambiar tema de la pagina web
function cambiarTema(temaSeleccionado){
    let tema = "";
    if (temaSeleccionado == "anime"){
        tema = "css/style-anime.css";
    }else if(temaSeleccionado == "dev"){
        tema = "css/style-dev.css";
    }else if(temaSeleccionado == "alura"){
        tema = "css/style.css";
    }   
    document.getElementById("tema-pagina").href = tema;
}

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
            document.getElementById("msj-aviso").innerHTML = ("<a id='simbolo-aviso'>&excl;</a> ¡Por favor, ingrese un texto para encriptar!");
            document.getElementById("aviso").style = "color:#ff0000; font-weight:bold";
            document.getElementById("simbolo-aviso").style = "background:#ff0000; font-weight:bold";
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
            document.getElementById("msj-aviso").innerHTML = ("<a id='simbolo-aviso'>&excl;</a> ¡Mensaje encriptado exitosamente!");
            document.getElementById("aviso").style = "color:#00dd00; font-weight:bold";  
            document.getElementById("simbolo-aviso").style = "background:#00dd00; font-weight:bold";
        }
    }
    else{
        document.getElementById("msj-aviso").innerHTML = ("<a id='simbolo-aviso'>&excl;</a> ¡Por favor, ingrese solo letras minúsculas y sin acentos!");
        document.getElementById("aviso").style = "color:#ff0000; font-weight:bold";
        document.getElementById("simbolo-aviso").style = "background:#ff0000; font-weight:bold";
    } 
}

//Funcion para desencriptar texto
function desencriptar(){
    var texto = document.getElementById("area-texto").value;
    let numLetra = texto.length;
    let mensajeDesencriptado = "";
    if(verificarTexto(texto)){
        if (texto == mensajeDesencriptado){
            document.getElementById("msj-aviso").innerHTML = ("<a id='simbolo-aviso'>&excl;</a> ¡Por favor, ingrese un texto para desencriptar!");
            document.getElementById("aviso").style = "color:#ff0000; font-weight:bold";
            document.getElementById("simbolo-aviso").style = "background:#ff0000; font-weight:bold";
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
            document.getElementById("msj-aviso").innerHTML = ("<a id='simbolo-aviso'>&excl;</a> ¡Mensaje desencriptado exitosamente!");
            document.getElementById("aviso").style = "color:#00dd00; font-weight:bold";
            document.getElementById("simbolo-aviso").style = "background:#00dd00; font-weight:bold";   
        } 
    }
    else{
        document.getElementById("msj-aviso").innerHTML = ("<a id='simbolo-aviso'>&excl;</a> ¡Por favor, ingrese solo letras minúsculas y sin acentos!");
        document.getElementById("aviso").style = "color:#ff0000; font-weight:bold";
        document.getElementById("simbolo-aviso").style = "background:#ff0000; font-weight:bold";
    } 
}


//Funcion para copiar el texto encriptado o desencriptado
function copy(){
    let copyText = document.querySelector("#area-encriptada");
    copyText.select();
    document.execCommand("copy");
    document.getElementById("aviso-copiado").style.display = "block";
    document.getElementById("area-encriptada").style.height = "85%";
    setInterval()
}