$(document).ready(function () {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', e => {
            button.classList.toggle('added');
        });
    });

    $('.owl-products').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: false,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2
            },
            400: {
                items: 2
            },
            500: {
                items: 3
            },
            750:{
                items:4
            },
            1000:{
                items:4
            }
        }
    });
});

$("[data-fancybox]").fancybox({
    selector: '[data-fancybox="images"]',
    loop: true
});