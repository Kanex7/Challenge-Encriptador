let outputArray = [];
let caractereValidos = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let inputUser = " ";
let outputTexto = " ";
let caracteres = " ";
let caracter = " ";


contadorCaracter = 0;

function encriptar(){ 
    inputUser = document.getElementById('inputUser').value;

    if (checkReglas(inputUser)){

        for (let i = 0; i < (inputUser.length); i++) {

            caracteres = inputUser.substring(i,i+1)
    
            switch (caracteres) {
                case "a":
                    outputArray[i] = "ai";
                    break;
                case "e":
                    outputArray[i] = "enter";
                    break;
                case "i":
                    outputArray[i] = "imes";
                    break;
                case "o":
                    outputArray[i] = "ober";
                    break;
                case "u":
                    outputArray[i] = "ufat";
                    break;
                default:
                    outputArray[i] = caracteres;
            }
    
        }
        document.getElementById('output').value = outputArray.join("");
        outputArray = [];
    }
}   



function desencriptar(){ 
    inputUser = document.getElementById('inputUser').value;

    if(checkReglas(inputUser)){

        for (let i = 0; i < (inputUser.length); i++) {


            caracteres = inputUser.substring(i,i+2);

            if (caracteres == "ai") {
                outputArray[contadorCaracter] = "a";
                i++;

            } else {
                caracteres = inputUser.substring(i,i+5);

                if (caracteres == "enter") {
                    outputArray[contadorCaracter] = "e";
                    i=i+4;

                } else {
                    caracteres = inputUser.substring(i,i+4);

                    switch (caracteres) {
                        case "imes":
                            outputArray[contadorCaracter] = "i";
                            i=i+3;
                            break;
                        case "ober":
                            outputArray[contadorCaracter] = "o";
                            i=i+3;
                            break;
                        case "ufat":
                            outputArray[contadorCaracter] = "u";
                            i=i+3;
                            break;
                        default:
                            outputArray[contadorCaracter] = inputUser.substring(i,i+1);
                    }
                }                    
            }
            contadorCaracter++;

        }
        document.getElementById('output').value = outputArray.join("");
        outputArray = [];
    }

}


function checkReglas(inputUserACheckear){

    for (let i = 0; i < (inputUser.length); i++) {
        caracter = inputUser.substring(i,i+1);

        if (caractereValidos.includes(caracter)){
            return true;
        } else {
            alert("Solo se permiten minúsculas sin acentos");
            document.getElementById('inputUser').value = "";
            return false;
        }
    }
}
