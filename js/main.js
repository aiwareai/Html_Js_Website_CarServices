(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials slider
    let slideIndex = 0;
    const slider = document.querySelector('.testimonial-slider');
    const slides = document.querySelectorAll('.testimonial-item');
    const totalSlides = slides.length;
    
    function getSlideWidth() {
        return slides[0].offsetWidth; // Assuming all slides have the same width
    }
    
    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        slider.scrollLeft = getSlideWidth() * slideIndex;
    }
    
    function prevSlide() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        slider.scrollLeft = getSlideWidth() * slideIndex;
    }
    
    // Optional: Auto-slide
    setInterval(nextSlide, 2000); // Change slide every 3 seconds


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fas fa-arrow-alt-circle-left"></i>',
            '<i class="far fa-arrow-alt-circle-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    
})(jQuery);

