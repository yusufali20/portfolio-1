
// =============sticky navbar part start=>>>>>>>>>>>>>
window.addEventListener("scroll", function(){
    let fixedNavbar = this.document.querySelector("#menu_bar");
    fixedNavbar.classList.toggle("sticky", this.window.scrollY > 0);
})
// =============sticky navbar part start=>>>>>>>>>>>>>

// =============about venubox part start=>>>>>>>>>>>>>
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});
// =============about venubox part start=>>>>>>>>>>>>>

// =============service slider part start=>>>>>>>>>>>>>
$('.slider').slick({
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
    prevArrow:'<i class="fa fa-angle-down prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-angle-up next" aria-hidden="true"></i>',
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 992,
        settings: {
            vertical: false,
            verticalSwiping: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 768,
        settings: {
            vertical: false,
            verticalSwiping: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 425,
        settings: {
            vertical: false,
            verticalSwiping: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
]
});
// =============service slider part end=>>>>>>>>>>>>>

// =============admin slider part start=>>>>>>>>>>>>>
$('.image_slider').slick({
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
    prevArrow:'<i class="fa fa-angle-down prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-angle-up next" aria-hidden="true"></i>',
    asNavFor: '.details_slider',
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
        }
    },
    {
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 425,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
]
});
$('.details_slider').slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    asNavFor: '.image_slider',
    fade: true,
});
// =============admin slider part end=>>>>>>>>>>>>>

// =============counter up part start=>>>>>>>>>>>>>
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
// =============counter up part end=>>>>>>>>>>>>>

// =============others logo slider part start=>>>>>>>>>>>>>
$('.logo_slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplayspeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
// =============others logo slider part end=>>>>>>>>>>>>>