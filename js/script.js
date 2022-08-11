//declaração de variavel
var criptografar = document.getElementById("camp_write");
var validationText = document.querySelector("#camp_write");
var campoTexto = document.getElementById("camp_text");

let elementInline = document.getElementById("text");
let elementeNone = document.getElementById("image");


//validação caracter especial e caixa alta

criptografar.addEventListener('keypress', function (e) {

    if (!checkChar(e)) {
        e.preventDefault();
    }

});

function checkChar(e) {
    const char = String.fromCharCode(e.keyCode);

    const letra = '[a-z ]';

    if (char.match(letra)) {
        console.log(e.keyCode);
        return true;
    }
}


//codificação
function textoCriptografar() {

    let criptografia = criptografar.value
        .replaceAll('a', 'ai')
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');
    console.log(criptografia);

    campoTexto.innerHTML = criptografia;

    criptografar.value = "";
}


//descriptografar
function textodescriptografar() {
    let decodificar = criptografar.value
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');
    console.log(decodificar);

    campoTexto.innerHTML = decodificar;

    criptografar.value = "";
}


//área de transferência
function copiar() {
    let textoCopiado = document.querySelector("#camp_text");
    textoCopiado.select();

    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 400);
    document.execCommand("copy");

    criptografar.value = textoCopiado.value;
}


//modificação no css
function desativar() {
    elementInline.style.display = "inline-block";
    elementeNone.style.display = "none";
}


//Máximo de caracter
validationText.addEventListener('input', function () {

    let caracterMax = validationText.maxLength;
    let digitando = validationText.value.length;

    let span = document.querySelector('#maxCaracter').innerText = (caracterMax - digitando);

    if (span <= 20) {
        document.querySelector("#maxCaracter").style.color = 'var(--orange)';

    } else if (span <= 100) {
        document.querySelector('#maxCaracter').style.color = 'var(--yellow)';

    } else {
        document.querySelector('#maxCaracter').style.color = '#62e062';
    }

});