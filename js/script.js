const imagemDestaque = document.querySelector("#imagem-destaque");
const miniaturas = document.querySelectorAll(".miniatura");

const imagemOriginal = "img/imagem destaque.jpeg";

miniaturas.forEach(function(miniatura) {
    miniatura.addEventListener("click", function() {

        if (imagemDestaque.src.includes(miniatura.src)) {
            imagemDestaque.src = imagemOriginal;
            imagemDestaque.alt = "Projeto em destaque";
        } else {
            imagemDestaque.src = miniatura.src;
            imagemDestaque.alt = miniatura.alt;
        }

    });
});