//declaração de variavel
var criptografar = document.getElementById("camp_write");
var validationText = document.querySelector("#camp_write");
var campoTexto = document.getElementById("camp_text");

let elementInline = document.getElementById("text");
let elementeNone = document.getElementById("image");

const btnCopiar = document.getElementById("copiaText")

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

    campoTexto.innerHTML = decodificar;

    criptografar.value = "";
}


//área de transferência
btnCopiar.addEventListener('click', (texto) => {
    texto.preventDefault();

    navigator.clipboard.writeText(campoTexto.value);
    console.log('Texto copiado para área de transferência! Ctrl+V em algum local para colar');

    criptografar.value = campoTexto.value;
});


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
