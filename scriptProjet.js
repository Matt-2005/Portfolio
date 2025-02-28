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

let svgmen = document.querySelector(".svg-men")
let pathmen = svgmen.querySelector("path");

const pathLengthMen = pathmen.getTotalLength();
gsap.set(pathmen, {strokeDasharray: pathLengthMen});

gsap.fromTo(
    pathmen, 
    {
        strokeDashoffset: pathLengthMen,
    }, 
    {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "none",
        // scrollTrigger: {
        //     trigger: ".svg-container",
        //     start: "top top",
        //     end: "bottom bottom",
        //     scrub: 1,
        // },
    }
);

let svgPhone = document.querySelector(".svg-phone")
let pathPhone = svgPhone.querySelector("path");

const pathLengthPhone = pathPhone.getTotalLength();
gsap.set(pathPhone, {strokeDasharray: pathLengthPhone});

gsap.fromTo(
    pathPhone, 
    {
        strokeDashoffset: pathLengthPhone,
    },  
    {
        strokeDashoffset: 0,
        duration: 5,
        ease: "none",
        // scrollTrigger: {
        //     trigger: ".svg-container",
        //     start: "top top",
        //     end: "bottom bottom",
        //     scrub: 1,
        // },
    }
);

const menuBTN = document.querySelector(".navbarAccueilPhone")
const menuMobile = document.querySelector(".slideNavBar")
const navbarLeftPhone = document.querySelector(".navbarLeftPhone")
const navbarAccueilPhone = document.querySelector(".navbarAccueilPhone")
const navbarRightPhone = document.querySelector(".navbarRightPhone")
const navbarSombrePhone = document.querySelector(".navbarSombrePhone")

menuBTN.addEventListener('click', function() {
    menuMobile.classList.toggle("active"),
    navbarLeftPhone.classList.toggle("active"),
    navbarAccueilPhone.classList.toggle("active"),
    navbarRightPhone.classList.toggle("active"),
    navbarSombrePhone.classList.toggle("active")
})