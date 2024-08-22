function encriptar() {
    var texto = document.getElementById('texto-input').value;
    var textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Actualiza el texto en el contenedor de resultados
    document.getElementById('resultado').innerText = textoEncriptado;

    // Oculta el mensaje de placeholder
    var textoPlaceholder = document.getElementById('texto-placeholder');
    textoPlaceholder.style.display = 'none';
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

    var textoPlaceholder = document.getElementById('texto-placeholder');
    if (textoDesencriptado === '') {
        textoPlaceholder.style.display = 'block';
    } else {
        textoPlaceholder.style.display = 'none';
    }
}

document.querySelector('.criptografar').addEventListener('click', encriptar);
document.querySelector('.descriptografar').addEventListener('click', desencriptar);



function copiarTexto() {
    var texto = document.getElementById('resultado').innerText; 
    navigator.clipboard.writeText(texto) 
        
       
}

// Asociar la función al botón
document.getElementById('copiar').addEventListener('click', copiarTexto);
