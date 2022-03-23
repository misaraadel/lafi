$(document).ready(function () {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', e => {
            button.classList.toggle('added');
        });
    });

    //fancybox
    $("[data-fancybox]").fancybox({
        selector: '[data-fancybox="images"]',
        loop: true
    });
});