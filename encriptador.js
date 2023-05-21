function encriptando (){

    const message = document.getElementById("message").value;

    var replace = message.replace(/e/gm,"enter");
    var replace = replace.replace(/i/gm,"imes");
    var replace = replace.replace(/a/gm,"ai");
    var replace = replace.replace(/o/gm,"ober");
    var replace = replace.replace(/u/gm,"ufat");

    document.getElementById("messageTwo").innerHTML = replace;

}

function desencriptando (){

    const message = document.getElementById("message").value;

    var replace = message.replace(/imes/gm,"i");
    var replace = replace.replace(/enter/gm,"e");
    var replace = replace.replace(/ai/gm,"a");
    var replace = replace.replace(/ober/gm,"o");
    var replace = replace.replace(/ufat/gm,"u");

    document.getElementById("messageTwo").innerHTML = replace;

}

function copy (){
    
    const buttonCopy = document.getElementById("messageTwo");
    buttonCopy.select();
    buttonCopy.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(buttonCopy.value);

    message.value = "";
    buttonCopy.onclick = copy;
}
function buttonClean(){
    d1 = document.getElementById("message").value = "";
    d2 = document.getElementById("messageTwo").value = "";
}
