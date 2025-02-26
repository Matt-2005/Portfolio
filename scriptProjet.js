new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },  
    },
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
    },

});

window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;

    document.querySelector(".projet3paralaxText1").style.transform = `translateX(calc(-50% + ${scrollY * 0.1}px))`;
    document.querySelector(".projet3paralaxText2").style.transform = `translateX(calc(-50% - ${scrollY * 0.1}px))`;
});


