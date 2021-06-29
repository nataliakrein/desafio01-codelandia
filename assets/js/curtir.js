var likes = document.querySelectorAll('.js-like');

/*for (let like of likes) {
    like.addEventListener('click', () => liked(like));
}

function liked(item) {
    if (item.classList.contains('far')) {
        item.classList.remove('far');
        item.classList.add('fas')
    } else {
        item.classList.remove('fas');
        item.classList.add('far')
    }
}*/

for (let like of likes) {
    like.addEventListener('click', () => console.log('fui clicado'));
}