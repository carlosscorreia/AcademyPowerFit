document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuNavegacao = document.querySelector('.menu-navegacao');

    menuToggle.addEventListener('click', function () {
        menuNavegacao.classList.toggle('ativo');
        menuToggle.classList.toggle('ativo');
    });

    const linksMenu = document.querySelectorAll('.lista-menu a');
    linksMenu.forEach(function (link) {
        link.addEventListener('click', function () {
            menuNavegacao.classList.remove('ativo');
            menuToggle.classList.remove('ativo');
        });
    });
});
