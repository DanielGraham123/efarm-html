(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 768) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Header slider
    $('.header-slider').slick({
        autoplay: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    // Categories Slider
    $('.category-slider').slick({
        autoplay: false,
        infinite: true,
        dots: false,
        arrows: true,
        slidesToShow: 7,
        slidesToScroll: 2,
        centerMode: false,
        prevArrow: "<button class='slide-arrow prev-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button class='slide-arrow next-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('#searchBtn').click(function () {
        // $('#mobileSearch').slideDown(2000);
        ShowAndHide()
    });

    function ShowAndHide() {
        var x = document.getElementById('mobileSearch');
        if (x.style.display == 'none') {
            // x.animate({ transform: 'translateY(0)' }, { duration: 500, fill: 'forwards' })

            x.style.display = 'block';
            window.setTimeout(() => {
                x.style.opacity = 1;
                x.style.transform = 'translateY(0)';
                x.style.duration = 500;
                x.style.fill = 'forwards';
            }, 0)
        } else {
            x.style.display = 'none';
            x.style.opacity = 0;
            x.style.transform = 'translateY(-20px)';
        }
    }
    // Product Slider 3 Column
    $('.product-slider-3').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    // Product Detail Slider
    $('.product-slider-single').slick({
        infinite: true,
        autoplay: false,
        dots: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product-slider-single-nav'
    });
    $('.product-slider-single-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.product-slider-single'
    });


    // Brand Slider
    $('.brand-slider').slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: false,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // Review slider
    $('.review-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    // Widget slider
    $('.sidebar-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    // Quantity
    $('.qty button').on('click', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });


    // Shipping address show hide
    $('.checkout #shipto').change(function () {
        if ($(this).is(':checked')) {
            $('.checkout .shipping-address').slideDown();
        } else {
            $('.checkout .shipping-address').slideUp();
        }
    });


    // Payment methods show hide
    $('.checkout .payment-method .custom-control-input').change(function () {
        if ($(this).prop('checked')) {
            var checkbox_id = $(this).attr('id');
            $('.checkout .payment-method .payment-content').slideUp();
            $('#' + checkbox_id + '-show').slideDown();
        }
    });

    // Product List Slider
    $('.bbb_viewed_slider').owlCarousel({
        nav: true,
        autoWidth: true,
        navigation: true,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        dots: true,
        loop: true,
        margin: 5,
        // center: true,
        // stagePadding: 100,
        stageClass: "owl-stage d-flex justify-content-center",
        autoplay: false,
        autoplayTimeout: 6000,
        responsiveClass: true,
        items: 5,
        responsive:
        {
            0: { items: 1, nav: true },
            575: { items: 2, nav: true },
            768: { items: 3, nav: true },
            991: { items: 4, nav: true },
            1199: { items: 5, nav: true },
            1299: { items: 5, nav: true },
        },

    });

    // Product List Slider
    $('.recommended_slider').owlCarousel({
        nav: false,
        autoWidth: true,
        navigation: false,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        dots: false,
        loop: true,
        margin: 5,
        // center: true,
        // stagePadding: 100,
        stageClass: "owl-stage d-flex justify-content-center",
        autoplay: false,
        autoplayTimeout: 6000,
        responsiveClass: true,
        items: 1,
        responsive:
        {
            0: { items: 1, nav: false },
            575: { items: 2, nav: false },
            768: { items: 3, nav: false },
            991: { items: 4, nav: false },
            1199: { items: 5, nav: false },
            1299: { items: 5, nav: false },
        },

    });

    function darken_screen(yesno) {
        if (yesno == true) {
            document.querySelector('.screen-darken').classList.add('active');
        }
        else if (yesno == false) {
            document.querySelector('.screen-darken').classList.remove('active');
        }
    }

    function close_offcanvas() {
        darken_screen(false);
        document.querySelector('.mobile-offcanvas.show').classList.remove('show');
        document.body.classList.remove('offcanvas-active');
    }

    function show_offcanvas(offcanvas_id) {
        darken_screen(true);
        document.getElementById(offcanvas_id).classList.add('show');
        document.body.classList.add('offcanvas-active');
    }

    document.addEventListener("DOMContentLoaded", function () {

        document.querySelectorAll('[data-trigger]').forEach(function (everyelement) {
            let offcanvas_id = everyelement.getAttribute('data-trigger');
            everyelement.addEventListener('click', function (e) {
                e.preventDefault();
                show_offcanvas(offcanvas_id);
            });
        });

        document.querySelectorAll('.btn-close').forEach(function (everybutton) {
            everybutton.addEventListener('click', function (e) {
                close_offcanvas();
            });
        });

        document.querySelector('.screen-darken').addEventListener('click', function (event) {
            close_offcanvas();
        });

    });


})(jQuery);

