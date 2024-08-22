function encriptar() {
    var texto = document.getElementById('texto-input').value;
    var textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById('resultado').innerText = textoEncriptado;
}

function desencriptar() {
    var texto = document.getElementById('texto-input').value;
    var textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById('resultado').innerText = textoDesencriptado;
}
