document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const boxMobile = document.querySelector('.box-mobile');

    hamburger.addEventListener('click', function() {
        boxMobile.style.display = boxMobile.style.display === 'flex' ? 'none' : 'flex';
    });
});
