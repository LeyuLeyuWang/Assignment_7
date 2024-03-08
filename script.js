window.onload = function() {
    var button = document.querySelector('button[aria-label="click to switch contrast mode"]');
    var header = document.querySelector('header');
    var nav = document.querySelector('nav');
    var footer = document.querySelector('footer');

    button.addEventListener('click', function() {
        document.body.classList.toggle('high-contrast');
        header.classList.toggle('high-contrast-header');
        footer.classList.toggle('high-contrast-footer');
        nav.classList.toggle('high-contrast-nav');
    });
}