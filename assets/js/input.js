var filtro = document.querySelectorAll('.noticia__titulo')
var noticias = document.querySelectorAll('.noticias__container');
var input = document.querySelector('.header__input')

input.onkeyup = function() {
    var valorInput = input.value;
    for (var i = 0; i < noticias.length; i++) {
        var conteudoTitulo = filtro[i].innerText;
        var corresponde = conteudoTitulo.toLowerCase().indexOf(valorInput) >= 0;
        noticias[i].style.display = corresponde ? '' : 'none';
    }
};